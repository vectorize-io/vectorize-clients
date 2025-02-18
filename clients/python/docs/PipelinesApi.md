# vectorize_client.PipelinesApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**org_organization_id_pipelines_get**](PipelinesApi.md#org_organization_id_pipelines_get) | **GET** /org/{organizationId}/pipelines | List all pipelines
[**org_organization_id_pipelines_pipeline_id_delete**](PipelinesApi.md#org_organization_id_pipelines_pipeline_id_delete) | **DELETE** /org/{organizationId}/pipelines/{pipelineId} | Delete pipeline
[**org_organization_id_pipelines_pipeline_id_events_get**](PipelinesApi.md#org_organization_id_pipelines_pipeline_id_events_get) | **GET** /org/{organizationId}/pipelines/{pipelineId}/events | Get pipeline events
[**org_organization_id_pipelines_pipeline_id_get**](PipelinesApi.md#org_organization_id_pipelines_pipeline_id_get) | **GET** /org/{organizationId}/pipelines/{pipelineId} | Get pipeline details
[**org_organization_id_pipelines_pipeline_id_metrics_get**](PipelinesApi.md#org_organization_id_pipelines_pipeline_id_metrics_get) | **GET** /org/{organizationId}/pipelines/{pipelineId}/metrics | Get pipeline metrics
[**org_organization_id_pipelines_pipeline_id_start_post**](PipelinesApi.md#org_organization_id_pipelines_pipeline_id_start_post) | **POST** /org/{organizationId}/pipelines/{pipelineId}/start | Start a pipeline
[**org_organization_id_pipelines_pipeline_id_stop_post**](PipelinesApi.md#org_organization_id_pipelines_pipeline_id_stop_post) | **POST** /org/{organizationId}/pipelines/{pipelineId}/stop | Stop a pipeline
[**org_organization_id_pipelines_post**](PipelinesApi.md#org_organization_id_pipelines_post) | **POST** /org/{organizationId}/pipelines | Create a new pipeline
[**retrieve_documents**](PipelinesApi.md#retrieve_documents) | **POST** /org/{orgId}/pipelines/{pipelineId}/retrieval | Retrieve relevant documents based on a query


# **org_organization_id_pipelines_get**
> OrgOrganizationIdPipelinesGet200Response org_organization_id_pipelines_get(organization_id)

List all pipelines

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_pipelines_get200_response import OrgOrganizationIdPipelinesGet200Response
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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # List all pipelines
        api_response = await api_instance.org_organization_id_pipelines_get(organization_id)
        print("The response of PipelinesApi->org_organization_id_pipelines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->org_organization_id_pipelines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

### Return type

[**OrgOrganizationIdPipelinesGet200Response**](OrgOrganizationIdPipelinesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipelines retrieved successfully |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_pipelines_pipeline_id_delete**
> org_organization_id_pipelines_pipeline_id_delete(organization_id, pipeline_id)

Delete pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Delete pipeline
        await api_instance.org_organization_id_pipelines_pipeline_id_delete(organization_id, pipeline_id)
    except Exception as e:
        print("Exception when calling PipelinesApi->org_organization_id_pipelines_pipeline_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline deleted successfully |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_pipelines_pipeline_id_events_get**
> OrgOrganizationIdPipelinesPipelineIdEventsGet200Response org_organization_id_pipelines_pipeline_id_events_get(organization_id, pipeline_id, next_token=next_token)

Get pipeline events

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_pipelines_pipeline_id_events_get200_response import OrgOrganizationIdPipelinesPipelineIdEventsGet200Response
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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    next_token = 'next_token_example' # str | Pagination token for next page of results (optional)

    try:
        # Get pipeline events
        api_response = await api_instance.org_organization_id_pipelines_pipeline_id_events_get(organization_id, pipeline_id, next_token=next_token)
        print("The response of PipelinesApi->org_organization_id_pipelines_pipeline_id_events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->org_organization_id_pipelines_pipeline_id_events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **next_token** | **str**| Pagination token for next page of results | [optional] 

### Return type

[**OrgOrganizationIdPipelinesPipelineIdEventsGet200Response**](OrgOrganizationIdPipelinesPipelineIdEventsGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline events retrieved successfully |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_pipelines_pipeline_id_get**
> OrgOrganizationIdPipelinesPipelineIdGet200Response org_organization_id_pipelines_pipeline_id_get(organization_id, pipeline_id)

Get pipeline details

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_pipelines_pipeline_id_get200_response import OrgOrganizationIdPipelinesPipelineIdGet200Response
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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Get pipeline details
        api_response = await api_instance.org_organization_id_pipelines_pipeline_id_get(organization_id, pipeline_id)
        print("The response of PipelinesApi->org_organization_id_pipelines_pipeline_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->org_organization_id_pipelines_pipeline_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

### Return type

[**OrgOrganizationIdPipelinesPipelineIdGet200Response**](OrgOrganizationIdPipelinesPipelineIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline details retrieved successfully |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_pipelines_pipeline_id_metrics_get**
> OrgOrganizationIdPipelinesPipelineIdMetricsGet200Response org_organization_id_pipelines_pipeline_id_metrics_get(organization_id, pipeline_id)

Get pipeline metrics

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_pipelines_pipeline_id_metrics_get200_response import OrgOrganizationIdPipelinesPipelineIdMetricsGet200Response
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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Get pipeline metrics
        api_response = await api_instance.org_organization_id_pipelines_pipeline_id_metrics_get(organization_id, pipeline_id)
        print("The response of PipelinesApi->org_organization_id_pipelines_pipeline_id_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->org_organization_id_pipelines_pipeline_id_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

### Return type

[**OrgOrganizationIdPipelinesPipelineIdMetricsGet200Response**](OrgOrganizationIdPipelinesPipelineIdMetricsGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline metrics retrieved successfully |  -  |
**404** | Pipeline not found or no metrics available |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_pipelines_pipeline_id_start_post**
> OrgOrganizationIdPipelinesPipelineIdStartPost200Response org_organization_id_pipelines_pipeline_id_start_post(organization_id, pipeline_id)

Start a pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_pipelines_pipeline_id_start_post200_response import OrgOrganizationIdPipelinesPipelineIdStartPost200Response
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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Start a pipeline
        api_response = await api_instance.org_organization_id_pipelines_pipeline_id_start_post(organization_id, pipeline_id)
        print("The response of PipelinesApi->org_organization_id_pipelines_pipeline_id_start_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->org_organization_id_pipelines_pipeline_id_start_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

### Return type

[**OrgOrganizationIdPipelinesPipelineIdStartPost200Response**](OrgOrganizationIdPipelinesPipelineIdStartPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline started successfully |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_pipelines_pipeline_id_stop_post**
> OrgOrganizationIdPipelinesPipelineIdStopPost200Response org_organization_id_pipelines_pipeline_id_stop_post(organization_id, pipeline_id)

Stop a pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_pipelines_pipeline_id_stop_post200_response import OrgOrganizationIdPipelinesPipelineIdStopPost200Response
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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID

    try:
        # Stop a pipeline
        api_response = await api_instance.org_organization_id_pipelines_pipeline_id_stop_post(organization_id, pipeline_id)
        print("The response of PipelinesApi->org_organization_id_pipelines_pipeline_id_stop_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->org_organization_id_pipelines_pipeline_id_stop_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 

### Return type

[**OrgOrganizationIdPipelinesPipelineIdStopPost200Response**](OrgOrganizationIdPipelinesPipelineIdStopPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline stopped successfully |  -  |
**404** | Pipeline not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_pipelines_post**
> OrgOrganizationIdPipelinesPost200Response org_organization_id_pipelines_post(organization_id, org_organization_id_pipelines_post_request)

Create a new pipeline

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_pipelines_post200_response import OrgOrganizationIdPipelinesPost200Response
from vectorize_client.models.org_organization_id_pipelines_post_request import OrgOrganizationIdPipelinesPostRequest
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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    org_organization_id_pipelines_post_request = vectorize_client.OrgOrganizationIdPipelinesPostRequest() # OrgOrganizationIdPipelinesPostRequest | 

    try:
        # Create a new pipeline
        api_response = await api_instance.org_organization_id_pipelines_post(organization_id, org_organization_id_pipelines_post_request)
        print("The response of PipelinesApi->org_organization_id_pipelines_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->org_organization_id_pipelines_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **org_organization_id_pipelines_post_request** | [**OrgOrganizationIdPipelinesPostRequest**](OrgOrganizationIdPipelinesPostRequest.md)|  | 

### Return type

[**OrgOrganizationIdPipelinesPost200Response**](OrgOrganizationIdPipelinesPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pipeline created successfully |  -  |
**400** | Invalid pipeline configuration |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_documents**
> RetrieveDocumentsResponse retrieve_documents(org_id, pipeline_id, retrieve_documents_request, stringify=stringify)

Retrieve relevant documents based on a query

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
async with vectorize_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vectorize_client.PipelinesApi(api_client)
    org_id = 'org_id_example' # str | Organization ID
    pipeline_id = 'pipeline_id_example' # str | Pipeline ID
    retrieve_documents_request = vectorize_client.RetrieveDocumentsRequest() # RetrieveDocumentsRequest | 
    stringify = false # str | Control JSON stringification of response value (optional) (default to false)

    try:
        # Retrieve relevant documents based on a query
        api_response = await api_instance.retrieve_documents(org_id, pipeline_id, retrieve_documents_request, stringify=stringify)
        print("The response of PipelinesApi->retrieve_documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PipelinesApi->retrieve_documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Organization ID | 
 **pipeline_id** | **str**| Pipeline ID | 
 **retrieve_documents_request** | [**RetrieveDocumentsRequest**](RetrieveDocumentsRequest.md)|  | 
 **stringify** | **str**| Control JSON stringification of response value | [optional] [default to false]

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
**200** | Retrieved documents successfully |  -  |
**400** | Invalid request parameters |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

