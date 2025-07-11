import {beforeEach, describe, it, expect} from "vitest";
import {createTestContext, TestContext} from "./testContext";
import {
    SourceConnectorsApi,
    AIPlatformConnectorsApi,
    DestinationConnectorsApi,
    PipelinesApi,
    ResponseError,
    SourceConnectorType,
    AIPlatformType,
    DestinationConnectorType
} from "@vectorize-io/vectorize-client";
import {pipeline} from "stream";
import * as os from "node:os";
import exp from "node:constants";

export let testContext: TestContext;

beforeEach(() => {
    testContext = createTestContext();
});

async function findVectorizeDestinationConnector(destinationConnectorsApi: DestinationConnectorsApi) {
    let destinationResponse = await destinationConnectorsApi.getDestinationConnectors({
        organizationId: testContext.orgId
    });
    const destinationConnectorId = destinationResponse.destinationConnectors.find((connector) => connector.type === "VECTORIZE")!.id;
    return destinationConnectorId;
}

async function findAIPlatformVectorizeConnector(aiPlatformConnectorsApi: AIPlatformConnectorsApi) {
    let aiPlatformResponse = await aiPlatformConnectorsApi.getAIPlatformConnectors({
        organizationId: testContext.orgId
    });
    const aiPlatformId = aiPlatformResponse.aiPlatformConnectors.find((connector) => connector.type === "VECTORIZE")!.id;
    return aiPlatformId;
}

async function createWebCrawlerSource(sourceConnectorsApi: SourceConnectorsApi) {
    let sourceResponse = await sourceConnectorsApi.createSourceConnector({
        organizationId: testContext.orgId,
        createSourceConnectorRequest: {
            type: SourceConnectorType.WebCrawler,
            name: "from api",
            config: {"seed-urls": ["https://docs.vectorize.io"]}
        }
    });
    const sourceConnectorId = sourceResponse.connector.id;
    await sourceConnectorsApi.updateSourceConnector({
        organizationId: testContext.orgId,
        sourceConnectorId,
        updateSourceConnectorRequest: {
            config: {"seed-urls": ["https://docs.vectorize.io", "https://vectorize.io"]}
        }
    });
    return sourceConnectorId;
}

async function deployPipeline(pipelinesApi: PipelinesApi, sourceConnectorId: string, destinationConnectorId: string, aiPlatformId: string): Promise<string> {
    return (await pipelinesApi.createPipeline({
        organizationId: testContext.orgId,
        pipelineConfigurationSchema: {
            pipelineName: "from api",
            sourceConnectors: [{id: sourceConnectorId, type: SourceConnectorType.WebCrawler, config: {}}],
            destinationConnector: {
                id: destinationConnectorId,
                type: DestinationConnectorType.Vectorize,
                config: {}
            },
            aiPlatform: {
                id: aiPlatformId,
                type: AIPlatformType.Vectorize,
                config: {}
            },
            schedule: {type: "manual"}
        }
    })).data.id;
}

describe("connector", () => {
    it("source lifecycle", async () => {
        let sourceConnectorsApi = new SourceConnectorsApi(testContext.configuration);
        try {
            // Create source connector
            let sourceResponse = await sourceConnectorsApi.createSourceConnector({
                organizationId: testContext.orgId,
                createSourceConnectorRequest: {
                    name: "from api",
                    type: "WEB_CRAWLER",
                    config: {"seed-urls": ["https://docs.vectorize.io"]}
                }
            });
            const sourceConnectorId = sourceResponse.connector.id;
            
            // Update source connector
            /* ENG-2651
            await sourceConnectorsApi.updateSourceConnector({
                organizationId: testContext.orgId,
                sourceConnectorId,
                updateSourceConnectorRequest: {
                    config: {
                        "max-urls": 100,
                        "max-depth": 5
                    }
                }
            });
            */
            
            // Get all source connectors
            let connectors = await sourceConnectorsApi.getSourceConnectors({
                organizationId: testContext.orgId
            });
            expect(connectors.sourceConnectors.find(c => c.id === sourceConnectorId)).toBeTruthy()

            // Get single source connector
            const read = await sourceConnectorsApi.getSourceConnector({
                organizationId: testContext.orgId,
                sourceConnectorId
            })
            console.log("Full connector:", read)
            console.log("ConfigDoc after update:", read.configDoc)
            console.log("ConfigDoc keys:", Object.keys(read.configDoc || {}))
            
            expect(read.name).toBe("from api")
            let configDoc = read.configDoc;
            expect(configDoc!["seed-urls"]).toStrictEqual(["https://docs.vectorize.io"])
            expect(read.createdAt).toBeTruthy()
            
            // Delete source connector
            await sourceConnectorsApi.deleteSourceConnector({
                organizationId: testContext.orgId,
                sourceConnectorId
            })
            
            // Verify deletion
            connectors = await sourceConnectorsApi.getSourceConnectors({
                organizationId: testContext.orgId
            });
            expect(connectors.sourceConnectors.find(c => c.id === sourceConnectorId)).toBeFalsy()

        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response?.text());
            throw error
        }
    }, 120000);

    it("ai platform lifecycle", async () => {
        let aiPlatformConnectorsApi = new AIPlatformConnectorsApi(testContext.configuration);
        try {
            // Create AI platform connector
            let sourceResponse = await aiPlatformConnectorsApi.createAIPlatformConnector({
                organizationId: testContext.orgId,
                createAIPlatformConnectorRequest: {
                    name: "from api",
                    type: "OPENAI",
                    config: {"key": "sk"}
                }
            });
            const connectorId = sourceResponse.connector.id;
            
            /* ENG-2651
            await aiPlatformConnectorsApi.updateAIPlatformConnector({
                organizationId: testContext.orgId,
                aiplatformId: connectorId,
                updateAIPlatformConnectorRequest: {
                    config: {"key": "sk"}
                }
            });
            */
            
            // Get all AI platform connectors
            let connectors = await aiPlatformConnectorsApi.getAIPlatformConnectors({
                organizationId: testContext.orgId
            });
            expect(connectors.aiPlatformConnectors.find(c => c.id === connectorId)).toBeTruthy()

            // Get single AI platform connector
            const read = await aiPlatformConnectorsApi.getAIPlatformConnector({
                organizationId: testContext.orgId,
                aiPlatformConnectorId: connectorId
            })
            console.log(read)
            expect(read.name).toBe("from api")
            let configDoc = read.configDoc;
            // API key should be redacted/empty in response
            expect(Object.keys(configDoc!).length).toBe(0)
            expect(read.createdAt).toBeTruthy()
            
            // Delete AI platform connector
            await aiPlatformConnectorsApi.deleteAIPlatformConnector({
                organizationId: testContext.orgId,
                aiPlatformConnectorId: connectorId
            })
            
            // Verify deletion
            connectors = await aiPlatformConnectorsApi.getAIPlatformConnectors({
                organizationId: testContext.orgId
            });
            expect(connectors.aiPlatformConnectors.find(c => c.id === connectorId)).toBeFalsy()

        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response?.text());
            throw error
        }
    }, 120000);

    it("destination connector lifecycle", async () => {
        let destinationConnectorsApi = new DestinationConnectorsApi(testContext.configuration);
        try {
            // Create destination connector
            let sourceResponse = await destinationConnectorsApi.createDestinationConnector({
                organizationId: testContext.orgId,
                createDestinationConnectorRequest: {
                    name: "from api",
                    type: "PINECONE",
                    config: {"api-key": "sk"}
                }
            });
            const connectorId = sourceResponse.connector.id;
            
            /* ENG-2651
            await destinationConnectorsApi.updateDestinationConnector({
                organizationId: testContext.orgId,
                destinationConnectorId: connectorId,
                updateDestinationConnectorRequest: {
                    config: {"api-key": "sk"}
                }
            });
            */
            
            // Get all destination connectors
            let connectors = await destinationConnectorsApi.getDestinationConnectors({
                organizationId: testContext.orgId
            });
            expect(connectors.destinationConnectors.find(c => c.id === connectorId)).toBeTruthy()

            // Get single destination connector
            const read = await destinationConnectorsApi.getDestinationConnector({
                organizationId: testContext.orgId,
                destinationConnectorId: connectorId
            })
            console.log(read)
            expect(read.name).toBe("from api")
            let configDoc = read.configDoc;
            // API key should be redacted/empty in response
            expect(Object.keys(configDoc!).length).toBe(0)
            expect(read.createdAt).toBeTruthy()
            
            // Delete destination connector
            await destinationConnectorsApi.deleteDestinationConnector({
                organizationId: testContext.orgId,
                destinationConnectorId: connectorId
            })
            
            // Verify deletion
            connectors = await destinationConnectorsApi.getDestinationConnectors({
                organizationId: testContext.orgId
            });
            expect(connectors.destinationConnectors.find(c => c.id === connectorId)).toBeFalsy()

        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response?.text());
            throw error
        }
    }, 120000);
});