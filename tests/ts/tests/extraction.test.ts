import {beforeEach, describe, it, expect} from "vitest";
import {createTestContext, TestContext} from "./testContext";
import {ExtractionApi, FilesApi} from "@vectorize-io/vectorize-client";
import * as fs from "node:fs";

export let testContext: TestContext;

beforeEach(() => {
    testContext = createTestContext();
});

describe("extraction", () => {
    it("verify iris extraction", async () => {
        let extractionApi = new ExtractionApi(testContext.configuration)
        try {
            const startResponse = await new FilesApi(testContext.configuration)
                .startFileUpload({
                    organization: testContext.orgId,
                    startFileUploadRequest: {
                        name: "test",
                        contentType: "application/pdf"
                    }
                })

            const fileBuffer = fs.readFileSync("tests/research.pdf");
            const fetchResponse = await fetch(startResponse.uploadUrl, {
                method: 'PUT',
                body: fileBuffer,
                headers: {
                    'Content-Type': 'application/pdf'
                },
            });
            if (!fetchResponse.ok) {
                throw new Error(`Failed to upload file: ${fetchResponse.statusText}`);
            }

            const response = await extractionApi.startExtraction({
                organization: testContext.orgId,
                startExtractionRequest: {
                    fileId: startResponse.fileId,
                    chunkSize: 512,
                }
            })
            await pollExtraction(extractionApi, response.extractionId)


        } catch (error: any) {
            console.error(error?.response);
            console.error(await error?.response?.text());
            throw error
        }
    }, 120000);

    async function pollExtraction(extractionApi: ExtractionApi, extractionId: string) {
        while (true) {
            const result = await extractionApi.getExtractionResult({
                organization: testContext.orgId,
                extractionId: extractionId
            })
            if (result.ready) {
                expect(result.data?.success).toBe(true)
                expect(result.data?.error).toBeFalsy()
                expect(result.data?.chunks?.length).toBe(3)
                expect(result.data?.text).toBeTruthy()
                break
            } else {
                console.log("not ready")
            }
        }
    }

});
