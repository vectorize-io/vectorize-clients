import json
import logging
import os
from dataclasses import dataclass
from pathlib import Path

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
    header_name = None
    header_value = None
    if env == "prod":
        host = "https://api.vectorize.io/v1"
    elif env == "dev":
        host = "https://api-dev.vectorize.io/v1"
    elif env == "local":
        host = "http://localhost:3000/api"
        header_name = "x-lambda-api-key"
        header_value = token
    else:
        host = "https://api-staging.vectorize.io/v1"

    with v.ApiClient(v.Configuration(host=host, access_token=token, debug=True), header_name, header_value) as api:
        yield TestContext(api, org)


def test_get_pipelines(ctx: TestContext):
    pipelines = v.PipelinesApi(ctx.api_client)

    response = pipelines.get_pipelines(ctx.org_id)
    for pipeline in response.data:
        logging.info(pipeline.id)



def test_delete_system_connectors(ctx: TestContext):
    connectors = v.ConnectorsApi(ctx.api_client)

    ai_platforms = connectors.get_ai_platform_connectors(ctx.org_id)
    builtin_ai_platform = [c.id for c in ai_platforms.ai_platform_connectors if c.type == "VECTORIZE"][0]

    destination_connectors = connectors.get_destination_connectors(ctx.org_id)
    builtin_vector_db = [c.id for c in destination_connectors.destination_connectors if c.type == "VECTORIZE"][0]


    try:
        connectors.delete_ai_platform(ctx.org_id, builtin_ai_platform)
        raise ValueError("test should have failed")
    except Exception as e:
        logging.error(f"Failed to delete: {e}")
        if "Cannot delete system connector" in str(e):
            pass
        else:
            raise e

    try:
        connectors.delete_destination_connector(ctx.org_id, builtin_vector_db)
        raise ValueError("test should have failed")
    except Exception as e:
        logging.error(f"Failed to delete: {e}")
        if "Cannot delete system connector" in str(e):
            pass
        else:
            raise e


def test_upload_create_pipeline(ctx: TestContext):
    pipelines = v.PipelinesApi(ctx.api_client)

    connectors_api = v.ConnectorsApi(ctx.api_client)
    response = connectors_api.create_source_connector(ctx.org_id, [v.CreateSourceConnector(
        name="from api",
        type=v.SourceConnectorType.FILE_UPLOAD)]
    )
    source_connector_id = response.connectors[0].id
    logging.info(f"Created source connector {source_connector_id}")

    uploads_api = v.UploadsApi(ctx.api_client)
    upload_response = uploads_api.start_file_upload_to_connector(
        ctx.org_id, source_connector_id, v.StartFileUploadToConnectorRequest(
            name="research.pdf",
            content_type="application/pdf",
            metadata=json.dumps({"created-from-api": True})))

    import urllib3
    http = urllib3.PoolManager()
    this_dir = Path(__file__).parent
    file_path = this_dir / "research.pdf"

    with open(file_path, "rb") as f:
        response = http.request("PUT", upload_response.upload_url, body=f, headers={"Content-Type": "application/pdf", "Content-Length": str(os.path.getsize(file_path))})
    if response.status != 200:
        raise ValueError(f"Upload failed:")
    else:
        logging.info("Upload successful")

    ai_platforms = connectors_api.get_ai_platform_connectors(ctx.org_id)
    builtin_ai_platform = [c.id for c in ai_platforms.ai_platform_connectors if c.type == "VECTORIZE"][0]
    logging.info(f"Using AI platform {builtin_ai_platform}")

    vector_databases = connectors_api.get_destination_connectors(ctx.org_id)
    builtin_vector_db = [c.id for c in vector_databases.destination_connectors if c.type == "VECTORIZE"][0]
    logging.info(f"Using destination connector {builtin_vector_db}")

    created_pipeline_id = None
    try:

        response = pipelines.create_pipeline(ctx.org_id, v.PipelineConfigurationSchema(
            source_connectors=[v.SourceConnectorSchema(id=source_connector_id, type=v.SourceConnectorType.FILE_UPLOAD, config={})],
            destination_connector=v.DestinationConnectorSchema(id=builtin_vector_db, type=v.DestinationConnectorType.VECTORIZE, config={}),
            ai_platform=v.AIPlatformSchema(id=builtin_ai_platform, type=v.AIPlatformType.VECTORIZE, config={}),
            pipeline_name="Test pipeline",
            schedule=v.ScheduleSchema(type="manual")
            )
        )
        logging.info(f"Created pipeline {response.data.id}")
        created_pipeline_id = response.data.id
        pipeline_id = response.data.id
        _test_retrieval(ctx, response.data.id)

        response = pipelines.start_deep_research(ctx.org_id, response.data.id, v.StartDeepResearchRequest(
            query="What is the meaning of life?",
            web_search=False,
        ))
        research_id = response.research_id
        while True:
            response = pipelines.get_deep_research_result(ctx.org_id, pipeline_id, research_id)
            if response.ready:
                if response.data.success:
                    assert response.data.markdown
                    logging.info(response.data.markdown)
                else:
                    raise ValueError(f"Research failed: {response.data.error}")
                break
            logging.info(f"research not ready {response}")
    finally:
        if created_pipeline_id:
            try:
                pipelines.delete_pipeline(ctx.org_id, created_pipeline_id)
            except Exception as e:
                logging.error(f"Failed to delete pipeline {created_pipeline_id}: {e}")



def _test_retrieval(ctx: TestContext, pipeline_id: str):
    pipelines = v.PipelinesApi(ctx.api_client)
    response = pipelines.retrieve_documents(ctx.org_id, pipeline_id, v.RetrieveDocumentsRequest(
        question="What are you?",
        num_results=5,
    ))
    logging.info(response.documents)


@pytest.mark.timeout(60)
def test_extraction(ctx: TestContext):
    files_api = v.FilesApi(ctx.api_client)
    start_upload_response = files_api.start_file_upload(ctx.org_id, start_file_upload_request=v.StartFileUploadRequest(
        name="test",
        content_type="application/pdf"
    ))
    import urllib3
    http = urllib3.PoolManager()
    this_dir = Path(__file__).parent
    file_path = this_dir / "research.pdf"


    with open(file_path, "rb") as f:
        response = http.request("PUT", start_upload_response.upload_url, body=f, headers={"Content-Type": "application/pdf", "Content-Length": str(os.path.getsize(file_path))})
    if response.status != 200:
        raise ValueError(f"Upload failed:")
    else:
        print("Upload successful")

    extraction_api = v.ExtractionApi(ctx.api_client)
    response = extraction_api.start_extraction(ctx.org_id, start_extraction_request=v.StartExtractionRequest(
        file_id=start_upload_response.file_id
    ))
    extraction_id = response.extraction_id
    while True:
        response = extraction_api.get_extraction_result(ctx.org_id, extraction_id)
        if response.ready:
            assert response.data.success
            logging.info(response.data.text)
            assert response.data.text
            assert len(response.data.chunks) > 0
            break
        logging.info(f"not ready {response}")



