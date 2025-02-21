import {beforeEach, describe, it, expect} from "vitest";
import {createTestContext, TestContext} from "./testContext";
import {ConnectorsApi, PipelinesApi, ResponseError, UploadsApi} from "@vectorize-io/vectorize-client";
import {pipeline} from "stream";
import * as os from "node:os";

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

            const text = "Hello, this is a test blob!";
            const blob = new Blob([text], { type: "text/plain" });
            await uploadsApi.uploadFile({
                organization: testContext.orgId,
                connectorId: sourceConnectorId,
                file: blob,
                metadata: JSON.stringify({"mymeta": true})
            })

            let files = await uploadsApi.getUploadFiles({
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
