# vectorize_client.PipelinesApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_pipeline**](PipelinesApi.md#create_pipeline) | **POST** /org/{organizationId}/pipelines | Create a new pipeline
[**delete_pipeline**](PipelinesApi.md#delete_pipeline) | **DELETE** /org/{organizationId}/pipelines/{pipelineId} | Delete a pipeline
[**get_deep_research_result**](PipelinesApi.md#get_deep_research_result) | **GET** /org/{organizationId}/pipelines/{pipelineId}/deep-research/{researchId} | Get deep research result
[**get_pipeline**](PipelinesApi.md#get_pipeline) | **GET** /org/{organizationId}/pipelines/{pipelineId} | Get a pipeline
[**get_pipeline_events**](PipelinesApi.md#get_pipeline_events) | **GET** /org/{organizationId}/pipelines/{pipelineId}/events | Get pipeline events
[**get_pipeline_metrics**](PipelinesApi.md#get_pipeline_metrics) | **GET** /org/{organizationId}/pipelines/{pipelineId}/metrics | Get pipeline metrics
[**get_pipelines**](PipelinesApi.md#get_pipelines) | **GET** /org/{organizationId}/pipelines | Get all pipelines
[**retrieve_documents**](PipelinesApi.md#retrieve_documents) | **POST** /org/{organizationId}/pipelines/{pipelineId}/retrieval | Retrieve documents from a pipeline
[**start_deep_research**](PipelinesApi.md#start_deep_research) | **POST** /org/{organizationId}/pipelines/{pipelineId}/deep-research | Start a deep research
[**start_pipeline**](PipelinesApi.md#start_pipeline) | **POST** /org/{organizationId}/pipelines/{pipelineId}/start | Start a pipeline
[**stop_pipeline**](PipelinesApi.md#stop_pipeline) | **POST** /org/{organizationId}/pipelines/{pipelineId}/stop | Stop a pipeline


# **create_pipeline**
> CreatePipelineResponse create_pipeline(organization_id, pipeline_configuration_schema)

Create a new pipeline

Creates a new pipeline with source connectors, destination connector, and AI platform configuration. The specific configuration fields required depend on the connector types selected.

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
    organization_id = 'organization_id_example' # str | 
    pipeline_configuration_schema = {"sourceConnectors":[{"id":"4d61dfa9-ce3c-48df-824f-85d1d7421a84","type":"AWS_S3"}],"destinationConnector":[{"id":"e6d268f5-7164-4411-a24b-3d59c78958c8","type":"CAPELLA"}],"aiPlatform":[{"id":"65b8d1f0-32ad-459f-8799-7d359abf4ee4","type":"BEDROCK"}],"pipelineName":"Data Processing Pipeline","schedule":{"type":"manual"}} # PipelineConfigurationSchema | 

    try:
        # Create a new pipeline
        api_response = api_instance.create_pipeline(organization_id, pipeline_configuration_schema)
        print("The response of PipelinesApi->create_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->create_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
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

# **delete_pipeline**
> DeletePipelineResponse delete_pipeline(organization_id, pipeline_id)

Delete a pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.delete_pipeline_response import DeletePipelineResponse
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
    organization_id = 'organization_id_example' # str | 
    pipeline_id = 'pipeline_id_example' # str | 

    try:
        # Delete a pipeline
        api_response = api_instance.delete_pipeline(organization_id, pipeline_id)
        print("The response of PipelinesApi->delete_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->delete_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **pipeline_id** | **str**|  | 

### Return type

[**DeletePipelineResponse**](DeletePipelineResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline deleted successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deep_research_result**
> GetDeepResearchResponse get_deep_research_result(organization, pipeline, research_id)

Get deep research result

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_deep_research_response import GetDeepResearchResponse
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
    pipeline = 'pipeline_example' # str | 
    research_id = 'research_id_example' # str | 

    try:
        # Get deep research result
        api_response = api_instance.get_deep_research_result(organization, pipeline, research_id)
        print("The response of PipelinesApi->get_deep_research_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_deep_research_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **pipeline** | **str**|  | 
 **research_id** | **str**|  | 

### Return type

[**GetDeepResearchResponse**](GetDeepResearchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get Deep Research was successful |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pipeline**
> GetPipelineResponse get_pipeline(organization_id, pipeline_id)

Get a pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_pipeline_response import GetPipelineResponse
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
    organization_id = 'organization_id_example' # str | 
    pipeline_id = 'pipeline_id_example' # str | 

    try:
        # Get a pipeline
        api_response = api_instance.get_pipeline(organization_id, pipeline_id)
        print("The response of PipelinesApi->get_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **pipeline_id** | **str**|  | 

### Return type

[**GetPipelineResponse**](GetPipelineResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline fetched successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pipeline_events**
> GetPipelineEventsResponse get_pipeline_events(organization_id, pipeline_id, next_token=next_token)

Get pipeline events

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_pipeline_events_response import GetPipelineEventsResponse
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
    organization_id = 'organization_id_example' # str | 
    pipeline_id = 'pipeline_id_example' # str | 
    next_token = 'next_token_example' # str |  (optional)

    try:
        # Get pipeline events
        api_response = api_instance.get_pipeline_events(organization_id, pipeline_id, next_token=next_token)
        print("The response of PipelinesApi->get_pipeline_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **pipeline_id** | **str**|  | 
 **next_token** | **str**|  | [optional] 

### Return type

[**GetPipelineEventsResponse**](GetPipelineEventsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline events fetched successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pipeline_metrics**
> GetPipelineMetricsResponse get_pipeline_metrics(organization_id, pipeline_id)

Get pipeline metrics

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_pipeline_metrics_response import GetPipelineMetricsResponse
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
    organization_id = 'organization_id_example' # str | 
    pipeline_id = 'pipeline_id_example' # str | 

    try:
        # Get pipeline metrics
        api_response = api_instance.get_pipeline_metrics(organization_id, pipeline_id)
        print("The response of PipelinesApi->get_pipeline_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipeline_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **pipeline_id** | **str**|  | 

### Return type

[**GetPipelineMetricsResponse**](GetPipelineMetricsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline metrics fetched successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pipelines**
> GetPipelinesResponse get_pipelines(organization_id)

Get all pipelines

Returns a list of all pipelines in the organization

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
    organization_id = 'organization_id_example' # str | 

    try:
        # Get all pipelines
        api_response = api_instance.get_pipelines(organization_id)
        print("The response of PipelinesApi->get_pipelines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->get_pipelines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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
**200** | Pipelines retrieved successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_documents**
> RetrieveDocumentsResponse retrieve_documents(organization_id, pipeline_id, retrieve_documents_request)

Retrieve documents from a pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.retrieve_documents_request import RetrieveDocumentsRequest
from vectorize_client.models.retrieve_documents_response import RetrieveDocumentsResponse
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
    organization_id = 'organization_id_example' # str | 
    pipeline_id = 'pipeline_id_example' # str | 
    retrieve_documents_request = {"question":"example-question","numResults":100,"rerank":true,"metadata-filters":[],"context":{"messages":[]}} # RetrieveDocumentsRequest | 

    try:
        # Retrieve documents from a pipeline
        api_response = api_instance.retrieve_documents(organization_id, pipeline_id, retrieve_documents_request)
        print("The response of PipelinesApi->retrieve_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->retrieve_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **pipeline_id** | **str**|  | 
 **retrieve_documents_request** | [**RetrieveDocumentsRequest**](RetrieveDocumentsRequest.md)|  | 

### Return type

[**RetrieveDocumentsResponse**](RetrieveDocumentsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Documents retrieved successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_deep_research**
> StartDeepResearchResponse start_deep_research(organization_id, pipeline_id, start_deep_research_request)

Start a deep research

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.start_deep_research_request import StartDeepResearchRequest
from vectorize_client.models.start_deep_research_response import StartDeepResearchResponse
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
    organization_id = 'organization_id_example' # str | 
    pipeline_id = 'pipeline_id_example' # str | 
    start_deep_research_request = {"query":"example-query","webSearch":true,"schema":"example-schema","n8n":{"account":"example-account","webhookPath":"/example/path","headers":{}}} # StartDeepResearchRequest | 

    try:
        # Start a deep research
        api_response = api_instance.start_deep_research(organization_id, pipeline_id, start_deep_research_request)
        print("The response of PipelinesApi->start_deep_research:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->start_deep_research: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **pipeline_id** | **str**|  | 
 **start_deep_research_request** | [**StartDeepResearchRequest**](StartDeepResearchRequest.md)|  | 

### Return type

[**StartDeepResearchResponse**](StartDeepResearchResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deep Research started successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_pipeline**
> StartPipelineResponse start_pipeline(organization_id, pipeline_id)

Start a pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.start_pipeline_response import StartPipelineResponse
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
    organization_id = 'organization_id_example' # str | 
    pipeline_id = 'pipeline_id_example' # str | 

    try:
        # Start a pipeline
        api_response = api_instance.start_pipeline(organization_id, pipeline_id)
        print("The response of PipelinesApi->start_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->start_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **pipeline_id** | **str**|  | 

### Return type

[**StartPipelineResponse**](StartPipelineResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline started successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_pipeline**
> StopPipelineResponse stop_pipeline(organization_id, pipeline_id)

Stop a pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.stop_pipeline_response import StopPipelineResponse
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
    organization_id = 'organization_id_example' # str | 
    pipeline_id = 'pipeline_id_example' # str | 

    try:
        # Stop a pipeline
        api_response = api_instance.stop_pipeline(organization_id, pipeline_id)
        print("The response of PipelinesApi->stop_pipeline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->stop_pipeline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **pipeline_id** | **str**|  | 

### Return type

[**StopPipelineResponse**](StopPipelineResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline stopped successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

