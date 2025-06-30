# vectorize_client.ConnectorsAIPlatformsApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_ai_platform_connector**](ConnectorsAIPlatformsApi.md#create_ai_platform_connector) | **POST** /org/{organizationId}/connectors/aiplatforms | Create a new AI platform connector
[**delete_ai_platform**](ConnectorsAIPlatformsApi.md#delete_ai_platform) | **DELETE** /org/{organizationId}/connectors/aiplatforms/{aiplatformId} | Delete an AI platform connector
[**get_ai_platform_connector**](ConnectorsAIPlatformsApi.md#get_ai_platform_connector) | **GET** /org/{organizationId}/connectors/aiplatforms/{aiplatformId} | Get an AI platform connector
[**get_ai_platform_connectors**](ConnectorsAIPlatformsApi.md#get_ai_platform_connectors) | **GET** /org/{organizationId}/connectors/aiplatforms | Get all existing AI Platform connectors
[**update_ai_platform_connector**](ConnectorsAIPlatformsApi.md#update_ai_platform_connector) | **PATCH** /org/{organizationId}/connectors/aiplatforms/{aiplatformId} | Update an AI Platform connector


# **create_ai_platform_connector**
> CreateAIPlatformConnectorResponse create_ai_platform_connector(organization_id, create_ai_platform_connector_request_inner)

Create a new AI platform connector

Creates a new AI platform connector for embeddings and processing. The specific configuration fields required depend on the platform type selected.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.create_ai_platform_connector_request_inner import CreateAIPlatformConnectorRequestInner
from vectorize_client.models.create_ai_platform_connector_response import CreateAIPlatformConnectorResponse
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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_ai_platform_connector_request_inner = [{"name":"My CreateAIPlatformConnectorRequest","type":"BEDROCK","config":{"name":"My BEDROCKAuthConfig","access-key":"AKIAIOSFODNN7EXAMPLE","key":"key_example_123456","region":"us-east-1"}}] # List[CreateAIPlatformConnectorRequestInner] | 

    try:
        # Create a new AI platform connector
        api_response = api_instance.create_ai_platform_connector(organization_id, create_ai_platform_connector_request_inner)
        print("The response of ConnectorsAIPlatformsApi->create_ai_platform_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->create_ai_platform_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_ai_platform_connector_request_inner** | [**List[CreateAIPlatformConnectorRequestInner]**](CreateAIPlatformConnectorRequestInner.md)|  | 

### Return type

[**CreateAIPlatformConnectorResponse**](CreateAIPlatformConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector successfully created |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_ai_platform**
> DeleteAIPlatformConnectorResponse delete_ai_platform(organization, aiplatform_id)

Delete an AI platform connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.delete_ai_platform_connector_response import DeleteAIPlatformConnectorResponse
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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization = 'organization_example' # str | 
    aiplatform_id = 'aiplatform_id_example' # str | 

    try:
        # Delete an AI platform connector
        api_response = api_instance.delete_ai_platform(organization, aiplatform_id)
        print("The response of ConnectorsAIPlatformsApi->delete_ai_platform:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->delete_ai_platform: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **aiplatform_id** | **str**|  | 

### Return type

[**DeleteAIPlatformConnectorResponse**](DeleteAIPlatformConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AI Platform connector successfully deleted |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ai_platform_connector**
> AIPlatform get_ai_platform_connector(organization, aiplatform_id)

Get an AI platform connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.ai_platform import AIPlatform
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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization = 'organization_example' # str | 
    aiplatform_id = 'aiplatform_id_example' # str | 

    try:
        # Get an AI platform connector
        api_response = api_instance.get_ai_platform_connector(organization, aiplatform_id)
        print("The response of ConnectorsAIPlatformsApi->get_ai_platform_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->get_ai_platform_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **aiplatform_id** | **str**|  | 

### Return type

[**AIPlatform**](AIPlatform.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get an AI platform connector |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ai_platform_connectors**
> GetAIPlatformConnectors200Response get_ai_platform_connectors(organization_id)

Get all existing AI Platform connectors

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_ai_platform_connectors200_response import GetAIPlatformConnectors200Response
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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Get all existing AI Platform connectors
        api_response = api_instance.get_ai_platform_connectors(organization_id)
        print("The response of ConnectorsAIPlatformsApi->get_ai_platform_connectors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->get_ai_platform_connectors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetAIPlatformConnectors200Response**](GetAIPlatformConnectors200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all existing AI Platform connectors |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_ai_platform_connector**
> UpdateAIPlatformConnectorResponse update_ai_platform_connector(organization, aiplatform_id, update_aiplatform_connector_request)

Update an AI Platform connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.update_ai_platform_connector_response import UpdateAIPlatformConnectorResponse
from vectorize_client.models.update_aiplatform_connector_request import UpdateAiplatformConnectorRequest
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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization = 'organization_example' # str | 
    aiplatform_id = 'aiplatform_id_example' # str | 
    update_aiplatform_connector_request = vectorize_client.UpdateAiplatformConnectorRequest() # UpdateAiplatformConnectorRequest | 

    try:
        # Update an AI Platform connector
        api_response = api_instance.update_ai_platform_connector(organization, aiplatform_id, update_aiplatform_connector_request)
        print("The response of ConnectorsAIPlatformsApi->update_ai_platform_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->update_ai_platform_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **aiplatform_id** | **str**|  | 
 **update_aiplatform_connector_request** | [**UpdateAiplatformConnectorRequest**](UpdateAiplatformConnectorRequest.md)|  | 

### Return type

[**UpdateAIPlatformConnectorResponse**](UpdateAIPlatformConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AI Platform connector successfully updated |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

