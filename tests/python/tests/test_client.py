import logging
import os
from dataclasses import dataclass

import vectorize_client as v
import pytest

@dataclass
class TestContext:
    api_client: v.ApiClient
    org_id: str

@pytest.fixture
def ctx() -> TestContext:
    token = os.getenv("VECTORIZE_TOKEN")
    if not token:
        raise ValueError("Please set VECTORIZE_TOKEN environment variable")
    org = os.getenv("VECTORIZE_ORG")
    if not org:
        raise ValueError("Please set VECTORIZE_ORG environment variable")
    env = os.getenv("VECTORIZE_ENV", "prod")
    if env == "prod":
        host = "https://api.vectorize.io/v1"
    elif env == "dev":
        host = "https://api-dev.vectorize.io/v1"
    else:
        host = "https://api-staging.vectorize.io/v1"

    with v.ApiClient(v.Configuration(host=host, access_token=token, debug=True)) as api:
        yield TestContext(api, org)


def test_get_pipelines(ctx: TestContext):
    pipelines = v.PipelinesApi(ctx.api_client)

    response = pipelines.get_pipelines(ctx.org_id)
    for pipeline in response.data:
        logging.info(pipeline.id)

pytest.mark.timeout(60)
def test_extraction(ctx: TestContext):
    extraction_api = v.ExtractionApi(ctx.api_client)

    response = extraction_api.start_extraction(ctx.org_id, "Some text to embed".encode("utf-8"))
    extraction_id = response.extraction_id
    while True:
        response = extraction_api.get_extraction_result(ctx.org_id, extraction_id)
        if response.ready:
            assert response.data.success
            assert response.data.text
            assert len(response.data.chunks) > 0
            break
        logging.info(f"not ready {response}")



