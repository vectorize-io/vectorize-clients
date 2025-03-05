const {
    Configuration,
    PipelinesApi,
    ExtractionApi,
    UploadsApi,
    ConnectorsApi, FilesApi
} = require("@vectorize-io/vectorize-client");
const fs = require("fs");


const token = "your-api-token"
const org = "your-org-id"


async function createPipeline() {
    try {
        const api = new Configuration({
            accessToken: token
        });
        const pipelinesApi = new PipelinesApi(api);
        const uploadsApi = new UploadsApi(api);
        const connectorsApi = new ConnectorsApi(api);
        const extractionApi = new ExtractionApi(api);

        const sourceResponse = await connectorsApi.createSourceConnector({
            organization: org,
            requestBody: [
                {type: "FILE_UPLOAD", name: "My first upload connector"}
            ]
        });
        const sourceConnectorId = sourceResponse.connectors[0].id;

        const fileBuffer = fs.readFileSync("path/to/file.pdf");

        const uploadResponse = await uploadsApi.startFileUploadToConnector({
            organization: org,
            connectorId: sourceConnectorId,
            startFileUploadToConnectorRequest: {
                name: "file.pdf",
                contentType: "application/pdf",
                // add additional metadata that will be stored along with each chunk in the vector database
                metadata: JSON.stringify({"mymeta": true})
            }
        })

        const fetchResponse = await fetch(uploadResponse.uploadUrl, {
            method: 'PUT',
            body: fileBuffer,
            headers: {
                'Content-Type': 'application/pdf'
            },
        });
        if (!fetchResponse.ok) {
            throw new Error(`Failed to upload file: ${fetchResponse.statusText}`);
        }

        const aiPlatformResponse = await connectorsApi.getAIPlatformConnectors({
            organization: org
        });
        const builtinAIPlatformId = aiPlatformResponse.aiPlatformConnectors.find((connector) => connector.type === "VECTORIZE").id;

        const destinationResponse = await connectorsApi.getDestinationConnectors({
            organization: org
        });
        const builtinVectorDatabaseId = destinationResponse.destinationConnectors.find((connector) => connector.type === "VECTORIZE").id;


        const response = await pipelinesApi.createPipeline({
            organization: org,
            pipelineConfigurationSchema: {
                pipelineName: "My Pipeline From API",
                sourceConnectors: [{id: sourceConnectorId, type: "FILE_UPLOAD", config: {}}],
                destinationConnector: {
                    id: builtinVectorDatabaseId,
                    type: "VECTORIZE",
                    config: {}
                },
                aiPlatform: {
                    id: builtinAIPlatformId,
                    type: "VECTORIZE",
                    config: {}
                },
                schedule: {type: "manual"}
            }

        })
        const pipelineId = response.data.id;
        console.log(`Pipeline Id: ${pipelineId}`)


    } catch (error) {
        console.error(error?.response);
        console.error(await error?.response?.text());
        throw error
    }
}


async function pipelineFunctions(pipelineId) {
    try {
        const api = new Configuration({
            accessToken: token,
            basePath: "https://api-dev.vectorize.io/v1"
        });
        const pipelinesApi = new PipelinesApi(api);
        const uploadsApi = new UploadsApi(api);
        const connectorsApi = new ConnectorsApi(api);
        const extractionApi = new ExtractionApi(api);
        const documentsResponse = await pipelinesApi.retrieveDocuments({
            organization: org,
            pipeline: pipelineId,
            retrieveDocumentsRequest: {
                question: "<your-question>",
                numResults: 5,
            }
        });
        console.log(documentsResponse.documents)

        const response = await pipelinesApi.startDeepResearch({
            organization: org,
            pipeline: pipelineId,
            startDeepResearchRequest: {
                // make sure to include a relevant prompt here
                query: "Generate a report on financial status of company XX",
                // optionally enable additional search on the web
                webSearch: false
            }
        });
        const researchId = response.researchId;
        while (true) {
            const result = await pipelinesApi.getDeepResearchResult({
                organization: org,
                pipeline: pipelineId,
                researchId: researchId
            })
            if (result.ready) {
                if (result.data.success) {
                    console.log(result.data.markdown)
                } else {
                    console.log("Deep Research failed: ", result.data.error)
                }
                break
            } else {
                console.log("not ready")
            }
        }

    } catch
        (error) {
        console.error(error?.response);
        console.error(await error?.response?.text());
        throw error
    }
}


async function extraction() {
    try {
        const api = new Configuration({
            accessToken: token,
            basePath: "https://api-dev.vectorize.io/v1"
        });
        const pipelinesApi = new PipelinesApi(api);
        const uploadsApi = new UploadsApi(api);
        const connectorsApi = new ConnectorsApi(api);
        const filesApi = new FilesApi(api);
        const extractionApi = new ExtractionApi(api);

        const contentType = "application/pdf";
        const startResponse = await filesApi.startFileUpload({
            organization: org,
            startFileUploadRequest: {
                name: "My File",
                contentType
            }
        });

        const fileBuffer = fs.readFileSync("path/to/file.pdf");
        const fetchResponse = await fetch(startResponse.uploadUrl, {
            method: 'PUT',
            body: fileBuffer,
            headers: {
                'Content-Type': contentType
            },
        });
        if (!fetchResponse.ok) {
            throw new Error(`Failed to upload file: ${fetchResponse.statusText}`);
        }

        const response = await extractionApi.startExtraction({
            organization: org,
            startExtractionRequest: {
                fileId: startResponse.fileId,
                // the extraction will also chunk the file as it would do in a RAG pipeline
                chunkSize: 512,
            }
        })
        const extractionId = response.extractionId;

        while (true) {
            const result = await extractionApi.getExtractionResult({
                organization: org,
                extractionId: extractionId,
            })
            if (result.ready) {
                if (result.data.success) {
                    console.log(result.data.text)
                } else {
                    console.log("Extraction failed: ", result.data.error)
                }
                break
            } else {
                console.log("not ready")
            }
        }
    } catch
        (error) {
        console.error(error?.response);
        console.error(await error?.response?.text());
        throw error
    }
}

async function main() {
    const pipelineId = await createPipeline();
    await pipelineFunctions(pipelineId);
    await extraction();


}

main()