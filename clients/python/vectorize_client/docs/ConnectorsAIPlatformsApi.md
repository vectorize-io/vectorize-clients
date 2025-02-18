# vectorize_client.ConnectorsAIPlatformsApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**org_organization_id_connectors_aiplatforms_aiplatform_id_delete**](ConnectorsAIPlatformsApi.md#org_organization_id_connectors_aiplatforms_aiplatform_id_delete) | **DELETE** /org/{organizationId}/connectors/aiplatforms/{aiplatformId} | Delete an AI platform
[**org_organization_id_connectors_aiplatforms_aiplatform_id_get**](ConnectorsAIPlatformsApi.md#org_organization_id_connectors_aiplatforms_aiplatform_id_get) | **GET** /org/{organizationId}/connectors/aiplatforms/{aiplatformId} | Get AI platform details
[**org_organization_id_connectors_aiplatforms_aiplatform_id_patch**](ConnectorsAIPlatformsApi.md#org_organization_id_connectors_aiplatforms_aiplatform_id_patch) | **PATCH** /org/{organizationId}/connectors/aiplatforms/{aiplatformId} | Update AI platform details
[**org_organization_id_connectors_aiplatforms_get**](ConnectorsAIPlatformsApi.md#org_organization_id_connectors_aiplatforms_get) | **GET** /org/{organizationId}/connectors/aiplatforms | List AI platform connectors
[**org_organization_id_connectors_aiplatforms_post**](ConnectorsAIPlatformsApi.md#org_organization_id_connectors_aiplatforms_post) | **POST** /org/{organizationId}/connectors/aiplatforms | Create a new AI platform connector


# **org_organization_id_connectors_aiplatforms_aiplatform_id_delete**
> org_organization_id_connectors_aiplatforms_aiplatform_id_delete(organization_id, aiplatform_id)

Delete an AI platform

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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    aiplatform_id = 'aiplatform_id_example' # str | AI Platform ID

    try:
        # Delete an AI platform
        await api_instance.org_organization_id_connectors_aiplatforms_aiplatform_id_delete(organization_id, aiplatform_id)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->org_organization_id_connectors_aiplatforms_aiplatform_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **aiplatform_id** | **str**| AI Platform ID | 

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
**200** | AI platform deleted successfully |  -  |
**400** | Bad request - AI platform is in use by pipelines |  -  |
**401** | Unauthorized |  -  |
**404** | AI platform not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_aiplatforms_aiplatform_id_get**
> org_organization_id_connectors_aiplatforms_aiplatform_id_get(organization_id, aiplatform_id)

Get AI platform details

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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    aiplatform_id = 'aiplatform_id_example' # str | AI Platform ID

    try:
        # Get AI platform details
        await api_instance.org_organization_id_connectors_aiplatforms_aiplatform_id_get(organization_id, aiplatform_id)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->org_organization_id_connectors_aiplatforms_aiplatform_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **aiplatform_id** | **str**| AI Platform ID | 

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
**200** | AI platform details retrieved successfully |  -  |
**401** | Unauthorized |  -  |
**404** | AI platform not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_aiplatforms_aiplatform_id_patch**
> org_organization_id_connectors_aiplatforms_aiplatform_id_patch(organization_id, aiplatform_id, org_organization_id_connectors_aiplatforms_aiplatform_id_patch_request)

Update AI platform details

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_aiplatforms_aiplatform_id_patch_request import OrgOrganizationIdConnectorsAiplatformsAiplatformIdPatchRequest
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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    aiplatform_id = 'aiplatform_id_example' # str | AI Platform ID
    org_organization_id_connectors_aiplatforms_aiplatform_id_patch_request = vectorize_client.OrgOrganizationIdConnectorsAiplatformsAiplatformIdPatchRequest() # OrgOrganizationIdConnectorsAiplatformsAiplatformIdPatchRequest | 

    try:
        # Update AI platform details
        await api_instance.org_organization_id_connectors_aiplatforms_aiplatform_id_patch(organization_id, aiplatform_id, org_organization_id_connectors_aiplatforms_aiplatform_id_patch_request)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->org_organization_id_connectors_aiplatforms_aiplatform_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **aiplatform_id** | **str**| AI Platform ID | 
 **org_organization_id_connectors_aiplatforms_aiplatform_id_patch_request** | [**OrgOrganizationIdConnectorsAiplatformsAiplatformIdPatchRequest**](OrgOrganizationIdConnectorsAiplatformsAiplatformIdPatchRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AI platform updated successfully |  -  |
**400** | Bad request - Invalid input |  -  |
**401** | Unauthorized |  -  |
**404** | AI platform not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_aiplatforms_get**
> OrgOrganizationIdConnectorsAiplatformsGet200Response org_organization_id_connectors_aiplatforms_get(organization_id)

List AI platform connectors

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_aiplatforms_get200_response import OrgOrganizationIdConnectorsAiplatformsGet200Response
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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization_id = 'organization_id_example' # str | The ID of the organization

    try:
        # List AI platform connectors
        api_response = await api_instance.org_organization_id_connectors_aiplatforms_get(organization_id)
        print("The response of ConnectorsAIPlatformsApi->org_organization_id_connectors_aiplatforms_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->org_organization_id_connectors_aiplatforms_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| The ID of the organization | 

### Return type

[**OrgOrganizationIdConnectorsAiplatformsGet200Response**](OrgOrganizationIdConnectorsAiplatformsGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of AI platform connectors |  -  |
**404** | No workspace found or no AI Platforms found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_aiplatforms_post**
> OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner org_organization_id_connectors_aiplatforms_post(organization_id, org_organization_id_connectors_aiplatforms_post_request)

Create a new AI platform connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_aiplatforms_get200_response_formatted_connectors_inner import OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner
from vectorize_client.models.org_organization_id_connectors_aiplatforms_post_request import OrgOrganizationIdConnectorsAiplatformsPostRequest
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
    api_instance = vectorize_client.ConnectorsAIPlatformsApi(api_client)
    organization_id = 'organization_id_example' # str | The ID of the organization
    org_organization_id_connectors_aiplatforms_post_request = vectorize_client.OrgOrganizationIdConnectorsAiplatformsPostRequest() # OrgOrganizationIdConnectorsAiplatformsPostRequest | 

    try:
        # Create a new AI platform connector
        api_response = await api_instance.org_organization_id_connectors_aiplatforms_post(organization_id, org_organization_id_connectors_aiplatforms_post_request)
        print("The response of ConnectorsAIPlatformsApi->org_organization_id_connectors_aiplatforms_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsAIPlatformsApi->org_organization_id_connectors_aiplatforms_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| The ID of the organization | 
 **org_organization_id_connectors_aiplatforms_post_request** | [**OrgOrganizationIdConnectorsAiplatformsPostRequest**](OrgOrganizationIdConnectorsAiplatformsPostRequest.md)|  | 

### Return type

[**OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner**](OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AI platform connector created successfully |  -  |
**404** | Workspace not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

