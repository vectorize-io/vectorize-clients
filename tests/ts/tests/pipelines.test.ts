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
    connectorsApi.createAIPlatformConnector()
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

describe("pipelines", () => {
    it("verify pipeline lifecycle", async () => {
        let connectorsApi = new ConnectorsApi(testContext.configuration);
        let pipelinesApi = new PipelinesApi(testContext.configuration);
        let pipelineId;
        try {

            const sourceConnectorId = await createWebCrawlerSource(connectorsApi);
            console.log("created source", sourceConnectorId);

            const aiPlatformId = await findAIPlatformVectorizeConnector(connectorsApi);
            console.log("ai platform", aiPlatformId);

            const destinationConnectorId = await findVectorizeDestinationConnector(connectorsApi);
            console.log("destinationConnectorId", destinationConnectorId);


            pipelineId = await deployPipeline(pipelinesApi, sourceConnectorId, destinationConnectorId, aiPlatformId);

            const events = await pipelinesApi.getPipelineEvents({
                organization: testContext.orgId,
                pipeline: pipelineId
            })
            console.log("events", events.data);
            const metrics = await pipelinesApi.getPipelineMetrics({
                organization: testContext.orgId,
                pipeline: pipelineId
            })
            console.log("metrics", metrics.data);
            await pipelinesApi.stopPipeline({
                organization: testContext.orgId,
                pipeline: pipelineId
            })

            await pipelinesApi.startPipeline({
                organization: testContext.orgId,
                pipeline: pipelineId
            })


            let response = await pipelinesApi.getPipelines({
                organization: testContext.orgId
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
                organization: testContext.orgId,
                pipeline: pipelineId,
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
                        organization: testContext.orgId,
                        pipeline: pipelineId
                    })
                } catch (error: any) {
                    console.error("failed to delete pipeline", error?.response);
                    throw error
                }
            }

        }
    }, 120000);

});
