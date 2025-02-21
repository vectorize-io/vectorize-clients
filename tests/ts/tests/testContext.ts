import {Configuration, PipelinesApi} from "@vectorize-io/vectorize-client";

export interface TestContext {
    orgId: string;
    configuration: Configuration;
}

export function createTestContext(): TestContext {
    const token = process.env.VECTORIZE_TOKEN
    if (!token) {
        throw new Error("VECTORIZE_TOKEN must be set");
    }
    const orgId = process.env.VECTORIZE_ORG
    if (!orgId) {
        throw new Error("VECTORIZE_ORG must be set");
    }
    const env = process.env.VECTORIZE_ENV || "local"
    let host;
    const headers: Record<string, string> = {}
    switch (env) {
        case "prod":
            host = "https://api.vectorize.io/v1";
            break;
        case "staging":
            host = "https://api-staging.vectorize.io/v1";
            break;
        case "dev":
            host = "https://api-dev.vectorize.io/v1";
            break;
        case "local":
            host = "http://localhost:3000/api";
            headers["x-lambda-api-key"] = token;
            break;
        default:
            throw new Error(`Unknown VECTORIZE_ENV: ${env}`);
    }


    let configuration = new Configuration({
        basePath: host,
        accessToken: token,
        headers: headers,
    });
    return {
        orgId: orgId,
        configuration: configuration
    }
}