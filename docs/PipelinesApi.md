# vectorize_client.PipelinesApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_pipeline**](PipelinesApi.md#create_pipeline) | **POST** /org/{organization}/pipelines | Create a new source pipeline. Config fields for sources: Amazon S3 (AWS_S3):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Azure Blob Storage (AZURE_BLOB):  Polling Interval (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Confluence (CONFLUENCE):  Spaces (spaces): array oftext, Root Parents (root-parents): array oftext) | Discord (DISCORD):  Emoji Filter (emoji): array oftext, Author Filter (author): array oftext, Ignore Author Filter (ignore-author): array oftext, Limit (limit): number) | Dropbox (DROPBOX):  Read from these folders (optional) (path-prefix): array oftext) | Google Drive OAuth (GOOGLE_DRIVE_OAUTH):  Polling Interval (seconds) (idle-time): number) | Google Drive (Service Account) (GOOGLE_DRIVE):  Restrict ingest to these folder URLs (optional) (root-parents): array oftext, Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (Vectorize) (GOOGLE_DRIVE_OAUTH_MULTI):  Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (White Label) (GOOGLE_DRIVE_OAUTH_MULTI_CUSTOM):  Polling Interval (seconds) (idle-time): number) | Firecrawl (FIRECRAWL):  ) | GCP Cloud Storage (GCS):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Intercom (INTERCOM):  Reindex Interval (seconds) (reindexIntervalSeconds): number, Limit (limit): number, Tags (tags): array oftext) | OneDrive (ONE_DRIVE):  Read starting from this folder (optional) (path-prefix): text) | SharePoint (SHAREPOINT):  Site Name(s) (sites): array oftext) | Web Crawler (WEB_CRAWLER):  Additional Allowed URLs or prefix(es) (allowed-domains-opt): array ofurl, Forbidden Paths (forbidden-paths): array oftext, Throttle (ms) (min-time-between-requests): number, Max Error Count (max-error-count): number, Max URLs (max-urls): number, Max Depth (max-depth): number, Reindex Interval (seconds) (reindex-interval-seconds): number) | File Upload (FILE_UPLOAD):  ). Config fields for destinations: Couchbase Capella (CAPELLA):  Bucket Name (bucket): text, Scope Name (scope): text, Collection Name (collection): text, Search Index Name (index): text) | DataStax Astra (DATASTAX):  Collection Name (collection): text) | Elasticsearch (ELASTIC):  Index Name (index): text) | Pinecone (PINECONE):  Index Name (index): text, Namespace (namespace): text) | SingleStore (SINGLESTORE):  Table Name (table): text) | Milvus (MILVUS):  Collection Name (collection): text) | PostgreSQL (POSTGRESQL):  Table Name (table): text) | Qdrant (QDRANT):  Collection Name (collection): text) | Supabase (SUPABASE):  Table Name (table): text) | Weaviate (WEAVIATE):  Collection Name (collection): text) | Azure AI Search (AZUREAISEARCH):  Index Name (index): text) | Built-in (VECTORIZE):  ) | Chroma (CHROMA):  Index Name (index): text) | MongoDB (MONGODB):  Index Name (index): text). Config fields for AI platforms: 
[**get_pipelines**](PipelinesApi.md#get_pipelines) | **GET** /org/{organization}/pipelines | Get all existing pipelines


# **create_pipeline**
> CreatePipelineResponse create_pipeline(organization, pipeline_configuration_schema)

Create a new source pipeline. Config fields for sources: Amazon S3 (AWS_S3):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Azure Blob Storage (AZURE_BLOB):  Polling Interval (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Confluence (CONFLUENCE):  Spaces (spaces): array oftext, Root Parents (root-parents): array oftext) | Discord (DISCORD):  Emoji Filter (emoji): array oftext, Author Filter (author): array oftext, Ignore Author Filter (ignore-author): array oftext, Limit (limit): number) | Dropbox (DROPBOX):  Read from these folders (optional) (path-prefix): array oftext) | Google Drive OAuth (GOOGLE_DRIVE_OAUTH):  Polling Interval (seconds) (idle-time): number) | Google Drive (Service Account) (GOOGLE_DRIVE):  Restrict ingest to these folder URLs (optional) (root-parents): array oftext, Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (Vectorize) (GOOGLE_DRIVE_OAUTH_MULTI):  Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (White Label) (GOOGLE_DRIVE_OAUTH_MULTI_CUSTOM):  Polling Interval (seconds) (idle-time): number) | Firecrawl (FIRECRAWL):  ) | GCP Cloud Storage (GCS):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Intercom (INTERCOM):  Reindex Interval (seconds) (reindexIntervalSeconds): number, Limit (limit): number, Tags (tags): array oftext) | OneDrive (ONE_DRIVE):  Read starting from this folder (optional) (path-prefix): text) | SharePoint (SHAREPOINT):  Site Name(s) (sites): array oftext) | Web Crawler (WEB_CRAWLER):  Additional Allowed URLs or prefix(es) (allowed-domains-opt): array ofurl, Forbidden Paths (forbidden-paths): array oftext, Throttle (ms) (min-time-between-requests): number, Max Error Count (max-error-count): number, Max URLs (max-urls): number, Max Depth (max-depth): number, Reindex Interval (seconds) (reindex-interval-seconds): number) | File Upload (FILE_UPLOAD):  ). Config fields for destinations: Couchbase Capella (CAPELLA):  Bucket Name (bucket): text, Scope Name (scope): text, Collection Name (collection): text, Search Index Name (index): text) | DataStax Astra (DATASTAX):  Collection Name (collection): text) | Elasticsearch (ELASTIC):  Index Name (index): text) | Pinecone (PINECONE):  Index Name (index): text, Namespace (namespace): text) | SingleStore (SINGLESTORE):  Table Name (table): text) | Milvus (MILVUS):  Collection Name (collection): text) | PostgreSQL (POSTGRESQL):  Table Name (table): text) | Qdrant (QDRANT):  Collection Name (collection): text) | Supabase (SUPABASE):  Table Name (table): text) | Weaviate (WEAVIATE):  Collection Name (collection): text) | Azure AI Search (AZUREAISEARCH):  Index Name (index): text) | Built-in (VECTORIZE):  ) | Chroma (CHROMA):  Index Name (index): text) | MongoDB (MONGODB):  Index Name (index): text). Config fields for AI platforms: 

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.create_pipeline_response import CreatePipelineResponse
from vectorize_client.models.pipeline_configuration_schema import PipelineConfigurationSchema
from vectorize_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.vectorize.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = vectorize_client.Configuration(
    host = "https://api.vectorize.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = vectorize_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization = 'organization_example' # str | 
    pipeline_configuration_schema = vectorize_client.PipelineConfigurationSchema() # PipelineConfigurationSchema | 

    try:
        # Create a new source pipeline. Config fields for sources: Amazon S3 (AWS_S3):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Azure Blob Storage (AZURE_BLOB):  Polling Interval (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Confluence (CONFLUENCE):  Spaces (spaces): array oftext, Root Parents (root-parents): array oftext) | Discord (DISCORD):  Emoji Filter (emoji): array oftext, Author Filter (author): array oftext, Ignore Author Filter (ignore-author): array oftext, Limit (limit): number) | Dropbox (DROPBOX):  Read from these folders (optional) (path-prefix): array oftext) | Google Drive OAuth (GOOGLE_DRIVE_OAUTH):  Polling Interval (seconds) (idle-time): number) | Google Drive (Service Account) (GOOGLE_DRIVE):  Restrict ingest to these folder URLs (optional) (root-parents): array oftext, Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (Vectorize) (GOOGLE_DRIVE_OAUTH_MULTI):  Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (White Label) (GOOGLE_DRIVE_OAUTH_MULTI_CUSTOM):  Polling Interval (seconds) (idle-time): number) | Firecrawl (FIRECRAWL):  ) | GCP Cloud Storage (GCS):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Intercom (INTERCOM):  Reindex Interval (seconds) (reindexIntervalSeconds): number, Limit (limit): number, Tags (tags): array oftext) | OneDrive (ONE_DRIVE):  Read starting from this folder (optional) (path-prefix): text) | SharePoint (SHAREPOINT):  Site Name(s) (sites): array oftext) | Web Crawler (WEB_CRAWLER):  Additional Allowed URLs or prefix(es) (allowed-domains-opt): array ofurl, Forbidden Paths (forbidden-paths): array oftext, Throttle (ms) (min-time-between-requests): number, Max Error Count (max-error-count): number, Max URLs (max-urls): number, Max Depth (max-depth): number, Reindex Interval (seconds) (reindex-interval-seconds): number) | File Upload (FILE_UPLOAD):  ). Config fields for destinations: Couchbase Capella (CAPELLA):  Bucket Name (bucket): text, Scope Name (scope): text, Collection Name (collection): text, Search Index Name (index): text) | DataStax Astra (DATASTAX):  Collection Name (collection): text) | Elasticsearch (ELASTIC):  Index Name (index): text) | Pinecone (PINECONE):  Index Name (index): text, Namespace (namespace): text) | SingleStore (SINGLESTORE):  Table Name (table): text) | Milvus (MILVUS):  Collection Name (collection): text) | PostgreSQL (POSTGRESQL):  Table Name (table): text) | Qdrant (QDRANT):  Collection Name (collection): text) | Supabase (SUPABASE):  Table Name (table): text) | Weaviate (WEAVIATE):  Collection Name (collection): text) | Azure AI Search (AZUREAISEARCH):  Index Name (index): text) | Built-in (VECTORIZE):  ) | Chroma (CHROMA):  Index Name (index): text) | MongoDB (MONGODB):  Index Name (index): text). Config fields for AI platforms: 
        api_response = api_instance.create_pipeline(organization, pipeline_configuration_schema)
        print("The response of PipelinesApi->create_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->create_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **pipeline_configuration_schema** | [**PipelineConfigurationSchema**](PipelineConfigurationSchema.md)|  | 

### Return type

[**CreatePipelineResponse**](CreatePipelineResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline created successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pipelines**
> GetPipelinesResponse get_pipelines(organization)

Get all existing pipelines

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_pipelines_response import GetPipelinesResponse
from vectorize_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.vectorize.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = vectorize_client.Configuration(
    host = "https://api.vectorize.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = vectorize_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization = 'organization_example' # str | 

    try:
        # Get all existing pipelines
        api_response = api_instance.get_pipelines(organization)
        print("The response of PipelinesApi->get_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 

### Return type

[**GetPipelinesResponse**](GetPipelinesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all pipelines |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

