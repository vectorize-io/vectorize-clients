import {beforeEach, describe, it, expect} from "vitest";
import {createTestContext, TestContext} from "./testContext";
import {ConnectorsApi, PipelinesApi, ResponseError, UploadsApi} from "@vectorize-io/vectorize-client";
import {pipeline} from "stream";
import * as os from "node:os";
import fs from "node:fs";

export let testContext: TestContext;

beforeEach(() => {
    testContext = createTestContext();
});

async function createFileUploadSource(connectorsApi: ConnectorsApi) {
    let sourceResponse = await connectorsApi.createSourceConnector({
        organization: testContext.orgId,
        requestBody: [
            {type: "FILE_UPLOAD", name: "from api"}
        ]
    });
    const sourceConnectorId = sourceResponse.connectors[0].id;
    return sourceConnectorId;
}

describe("uploads", () => {
    it("verify uploads lifecycle", async () => {
        let connectorsApi = new ConnectorsApi(testContext.configuration);
        let uploadsApi = new UploadsApi(testContext.configuration);
        try {

            const sourceConnectorId = await createFileUploadSource(connectorsApi);
            console.log("created source", sourceConnectorId);

            const fileBuffer = fs.readFileSync("tests/research.pdf");

            const uploadResponse = await uploadsApi.startFileUploadToConnector({
                organization: testContext.orgId,
                connectorId: sourceConnectorId,
                startFileUploadToConnectorRequest: {
                    name: "research.pdf",
                    contentType: "application/pdf",
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

            let files = await uploadsApi.getUploadFilesFromConnector({
                organization: testContext.orgId,
                connectorId: sourceConnectorId
            });
            console.log(files.files)

        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response?.text());
            throw error
        }
    }, 120000);

});
