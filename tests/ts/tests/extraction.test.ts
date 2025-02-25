import {beforeEach, describe, it, expect} from "vitest";
import {createTestContext, TestContext} from "./testContext";
import {ExtractionApi} from "@vectorize-io/vectorize-client";

export let testContext: TestContext;

beforeEach(() => {
    testContext = createTestContext();
});

describe("extraction", () => {
    it("verify iris extraction", async () => {
        let extractionApi = new ExtractionApi(testContext.configuration)
        try {
            const text = "# Hello\n\n## This is a subtitle\n\nThis is a paragraph\n\n- item 1\n- item 2\n\n";
            const blob = new Blob([text], { type: "text/markdown" });

            const response = await extractionApi.startExtraction({
                organization: testContext.orgId,
                file: blob,
                chunkSize: 512,
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
                    expect(result.data?.chunks?.length).toBe(1)
                    expect(result.data?.text).toBeTruthy()
                    break
                } else {
                    console.log("not ready")
                }
            }
    }

});
