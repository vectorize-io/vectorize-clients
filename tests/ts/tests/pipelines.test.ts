import {beforeEach, describe, it, expect} from "vitest";
import {createTestContext, TestContext} from "./testContext";
import {
    SourceConnectorsApi,
    AIPlatformConnectorsApi,
    DestinationConnectorsApi,
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

async function findVectorizeDestinationConnector(connectorsApi: DestinationConnectorsApi) {
    let destinationResponse = await connectorsApi.getDestinationConnectors({
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
    /* ENG-2651
    await sourceConnectorsApi.updateSourceConnector({
            organization: testContext.orgId,
        sourceConnectorId,
            updateSourceConnectorRequest: {
                config: {"seed-urls": ["https://docs.vectorize.io", "https://vectorize.io"]}
            }
        }
    );
    */
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
                type: DestinationConnectorType.VECTORIZE,
                config: {}
            },
            aiPlatform: {
                id: aiPlatformId,
                type: AIPlatformType.VECTORIZE,
                config: {}
            },
            schedule: {type: "manual"}
        }

    })).data.id;
}

describe("pipelines", () => {
    it("verify pipeline lifecycle", async () => {
        let sourceConnectorsApi = new SourceConnectorsApi(testContext.configuration);
        let destinationConnectorsApi = new DestinationConnectorsApi(testContext.configuration);
        let aiPlatformConnectorsApi = new AIPlatformConnectorsApi(testContext.configuration);
        let pipelinesApi = new PipelinesApi(testContext.configuration);
        let pipelineId;
        try {

            const sourceConnectorId = await createWebCrawlerSource(sourceConnectorsApi);
            console.log("created source", sourceConnectorId);

            const aiPlatformConnectorId = await findAIPlatformVectorizeConnector(aiPlatformConnectorsApi);
            console.log("ai platform", aiPlatformConnectorId);

            const destinationConnectorId = await findVectorizeDestinationConnector(destinationConnectorsApi);
            console.log("destinationConnectorId", destinationConnectorId);


            pipelineId = await deployPipeline(pipelinesApi, sourceConnectorId, destinationConnectorId, aiPlatformConnectorId);

            const events = await pipelinesApi.getPipelineEvents({
                organizationId: testContext.orgId,
                pipelineId: pipelineId
            })
            console.log("events", events.data);
            const metrics = await pipelinesApi.getPipelineMetrics({
                organizationId: testContext.orgId,
                pipelineId: pipelineId
            })
            console.log("metrics", metrics.data);
            await pipelinesApi.stopPipeline({
                organizationId: testContext.orgId,
                pipelineId: pipelineId
            })

            await pipelinesApi.startPipeline({
                organizationId: testContext.orgId,
                pipelineId: pipelineId
            })


            let response = await pipelinesApi.getPipelines({
                organizationId: testContext.orgId
            });
            console.log(response.data);
            const pipelines = response.data;
            let found = false
            for (let pipeline of pipelines) {
                if (pipelineId == pipeline.id) {
                    found = true;
                    break;
                }
            }
            expect(found).toBe(true)

            let docs = await pipelinesApi.retrieveDocuments({
                organizationId: testContext.orgId,
                pipelineId: pipelineId,
                retrieveDocumentsRequest: {
                    question: "what is vectorize?",
                    numResults: 5,
                }
            });
            console.log(docs)
        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response.text());
            throw error
        } finally {
            if (pipelineId) {
                try {
                    await pipelinesApi.deletePipeline({
                        organizationId: testContext.orgId,
                        pipelineId: pipelineId
                    })
                } catch (error: any) {
                    console.error("failed to delete pipeline", error?.response);
                    throw error
                }
            }

        }
    }, 120000);

});
