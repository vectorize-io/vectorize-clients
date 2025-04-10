import {beforeEach, describe, it, expect} from "vitest";
import {createTestContext, TestContext} from "./testContext";
import {
    ConnectorsApi,
    type CreateSourceConnector,
    PipelinesApi,
    ResponseError,
    SourceConnectorType
} from "@vectorize-io/vectorize-client";
import {pipeline} from "stream";
import * as os from "node:os";
import exp from "node:constants";
import {AIPlatformType, DestinationConnectorType} from "@vectorize-io/vectorize-client/src";

export let testContext: TestContext;

beforeEach(() => {
    testContext = createTestContext();
});

async function findVectorizeDestinationConnector(connectorsApi: ConnectorsApi) {
    let destinationResponse = await connectorsApi.getDestinationConnectors({
        organization: testContext.orgId
    });
    const destinationConnectorId = destinationResponse.destinationConnectors.find((connector) => connector.type === "VECTORIZE")!.id;
    return destinationConnectorId;
}

async function findAIPlatformVectorizeConnector(connectorsApi: ConnectorsApi) {
    let aiPlatformResponse = await connectorsApi.getAIPlatformConnectors({
        organization: testContext.orgId
    });
    const aiPlatformId = aiPlatformResponse.aiPlatformConnectors.find((connector) => connector.type === "VECTORIZE")!.id;
    return aiPlatformId;
}

async function createWebCrawlerSource(connectorsApi: ConnectorsApi) {
    let sourceResponse = await connectorsApi.createSourceConnector({
        organization: testContext.orgId,
        createSourceConnector: [
            {type: SourceConnectorType.WebCrawler, name: "from api", config: {"seed-urls": ["https://docs.vectorize.io"]}}
        ]
    });
    const sourceConnectorId = sourceResponse.connectors[0].id;
    await connectorsApi.updateSourceConnector({
            organization: testContext.orgId,
        sourceConnectorId,
            updateSourceConnectorRequest: {
                config: {"seed-urls": ["https://docs.vectorize.io", "https://vectorize.io"]}
            }
        }
    );
    return sourceConnectorId;
}

async function deployPipeline(pipelinesApi: PipelinesApi, sourceConnectorId: string, destinationConnectorId: string, aiPlatformId: string): Promise<string> {
    return (await pipelinesApi.createPipeline({
        organization: testContext.orgId,
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
        let connectorsApi = new ConnectorsApi(testContext.configuration);
        try {

            let sourceResponse = await connectorsApi.createSourceConnector({
                organization: testContext.orgId,
                createSourceConnector: [
                    {type: SourceConnectorType.WebCrawler, name: "from api", config: {"seed-urls": ["https://docs.vectorize.io"]}}
                ]
            });
            const sourceConnectorId = sourceResponse.connectors[0].id;
            await connectorsApi.updateSourceConnector({
                    organization: testContext.orgId,
                sourceConnectorId,
                    updateSourceConnectorRequest: {
                        config: {"seed-urls": ["https://docs.vectorize.io", "https://vectorize.io"]}
                    }
                }
            );
            let connectors = await connectorsApi.getSourceConnectors({
                organization: testContext.orgId
            });
            expect(connectors.sourceConnectors.find(c => c.id === sourceConnectorId)).toBeTruthy()

            const read = await connectorsApi.getSourceConnector({
                organization: testContext.orgId,
                sourceConnectorId
            })
            console.log(read)
            expect(read.name).toBe("from api")
            let configDoc = read.configDoc;
            expect(configDoc!["seed-urls"]).toStrictEqual([ 'https://docs.vectorize.io', 'https://vectorize.io' ])
            expect(read.createdAt).toBeTruthy()
            await connectorsApi.deleteSourceConnector({
                organization: testContext.orgId,
                sourceConnectorId
            })
            connectors = await connectorsApi.getSourceConnectors({
                organization: testContext.orgId
            });
            expect(connectors.sourceConnectors.find(c => c.id === sourceConnectorId)).toBeFalsy()

        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response?.text());
            throw error
        }
    }, 120000);

    it("ai platform lifecycle", async () => {
        let connectorsApi = new ConnectorsApi(testContext.configuration);
        try {

            let sourceResponse = await connectorsApi.createAIPlatformConnector({
                organization: testContext.orgId,
                createAIPlatformConnector: [
                    {type: AIPlatformType.Openai, name: "from api", config: {"key": "sk"}}
                ]
            });
            const connectorId = sourceResponse.connectors[0].id;
            await connectorsApi.updateAIPlatformConnector({
                    organization: testContext.orgId,
                    aiplatformId: connectorId,
                    updateAIPlatformConnectorRequest: {
                        config: {"key": "sk"}
                    }
                }
            );
            let connectors = await connectorsApi.getAIPlatformConnectors({
                organization: testContext.orgId
            });
            expect(connectors.aiPlatformConnectors.find(c => c.id === connectorId)).toBeTruthy()

            const read = await connectorsApi.getAIPlatformConnector({
                organization: testContext.orgId,
                aiplatformId: connectorId
            })
            console.log(read)
            expect(read.name).toBe("from api")
            let configDoc = read.configDoc;
            expect(Object.keys(configDoc!).length).toBe(0)
            expect(read.createdAt).toBeTruthy()
            await connectorsApi.deleteAIPlatform({
                organization: testContext.orgId,
                aiplatformId: connectorId
            })
            connectors = await connectorsApi.getAIPlatformConnectors({
                organization: testContext.orgId
            });
            expect(connectors.aiPlatformConnectors.find(c => c.id === connectorId)).toBeFalsy()

        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response?.text());
            throw error
        }
    }, 120000);


    it("destination connector lifecycle", async () => {
        let connectorsApi = new ConnectorsApi(testContext.configuration);
        try {

            let sourceResponse = await connectorsApi.createDestinationConnector({
                organization: testContext.orgId,
                createDestinationConnector: [
                    {type: DestinationConnectorType.Pinecone, name: "from api", config: {"api-key": "sk"}}
                ]
            });
            const connectorId = sourceResponse.connectors[0].id;
            await connectorsApi.updateDestinationConnector({
                    organization: testContext.orgId,
                    destinationConnectorId: connectorId,
                    updateDestinationConnectorRequest: {
                        config: {"api-key": "sk"}
                    }
                }
            );
            let connectors = await connectorsApi.getDestinationConnectors({
                organization: testContext.orgId
            });
            expect(connectors.destinationConnectors.find(c => c.id === connectorId)).toBeTruthy()

            const read = await connectorsApi.getDestinationConnector({
                organization: testContext.orgId,
                destinationConnectorId: connectorId
            })
            console.log(read)
            expect(read.name).toBe("from api")
            let configDoc = read.configDoc;
            expect(Object.keys(configDoc!).length).toBe(0)
            expect(read.createdAt).toBeTruthy()
            await connectorsApi.deleteDestinationConnector({
                organization: testContext.orgId,
                destinationConnectorId: connectorId
            })
            connectors = await connectorsApi.getDestinationConnectors({
                organization: testContext.orgId
            });
            expect(connectors.destinationConnectors.find(c => c.id === connectorId)).toBeFalsy()

        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response?.text());
            throw error
        }
    }, 120000);

});
