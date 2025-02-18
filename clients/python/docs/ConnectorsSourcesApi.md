# vectorize_client.ConnectorsSourcesApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**org_organization_id_connectors_sources_get**](ConnectorsSourcesApi.md#org_organization_id_connectors_sources_get) | **GET** /org/{organizationId}/connectors/sources | List source connectors
[**org_organization_id_connectors_sources_post**](ConnectorsSourcesApi.md#org_organization_id_connectors_sources_post) | **POST** /org/{organizationId}/connectors/sources | Create source connectors
[**org_organization_id_connectors_sources_source_connector_id_delete**](ConnectorsSourcesApi.md#org_organization_id_connectors_sources_source_connector_id_delete) | **DELETE** /org/{organizationId}/connectors/sources/{sourceConnectorId} | Delete source connector
[**org_organization_id_connectors_sources_source_connector_id_get**](ConnectorsSourcesApi.md#org_organization_id_connectors_sources_source_connector_id_get) | **GET** /org/{organizationId}/connectors/sources/{sourceConnectorId} | Get source connector details
[**org_organization_id_connectors_sources_source_connector_id_patch**](ConnectorsSourcesApi.md#org_organization_id_connectors_sources_source_connector_id_patch) | **PATCH** /org/{organizationId}/connectors/sources/{sourceConnectorId} | Update source connector


# **org_organization_id_connectors_sources_get**
> OrgOrganizationIdConnectorsSourcesGet200Response org_organization_id_connectors_sources_get(organization_id)

List source connectors

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_sources_get200_response import OrgOrganizationIdConnectorsSourcesGet200Response
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
    api_instance = vectorize_client.ConnectorsSourcesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # List source connectors
        api_response = await api_instance.org_organization_id_connectors_sources_get(organization_id)
        print("The response of ConnectorsSourcesApi->org_organization_id_connectors_sources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourcesApi->org_organization_id_connectors_sources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

### Return type

[**OrgOrganizationIdConnectorsSourcesGet200Response**](OrgOrganizationIdConnectorsSourcesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Source connectors retrieved successfully |  -  |
**404** | No connectors found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_sources_post**
> OrgOrganizationIdConnectorsDestinationsPost200Response org_organization_id_connectors_sources_post(organization_id, request_body)

Create source connectors

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_destinations_post200_response import OrgOrganizationIdConnectorsDestinationsPost200Response
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
    api_instance = vectorize_client.ConnectorsSourcesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    request_body = None # List[object] | 

    try:
        # Create source connectors
        api_response = await api_instance.org_organization_id_connectors_sources_post(organization_id, request_body)
        print("The response of ConnectorsSourcesApi->org_organization_id_connectors_sources_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourcesApi->org_organization_id_connectors_sources_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **request_body** | [**List[object]**](object.md)|  | 

### Return type

[**OrgOrganizationIdConnectorsDestinationsPost200Response**](OrgOrganizationIdConnectorsDestinationsPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connectors created successfully |  -  |
**400** | Invalid connector configuration |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_sources_source_connector_id_delete**
> OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response org_organization_id_connectors_sources_source_connector_id_delete(organization_id, source_connector_id)

Delete source connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_destinations_destination_connector_id_delete200_response import OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response
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
    api_instance = vectorize_client.ConnectorsSourcesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    source_connector_id = 'source_connector_id_example' # str | Source Connector ID

    try:
        # Delete source connector
        api_response = await api_instance.org_organization_id_connectors_sources_source_connector_id_delete(organization_id, source_connector_id)
        print("The response of ConnectorsSourcesApi->org_organization_id_connectors_sources_source_connector_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourcesApi->org_organization_id_connectors_sources_source_connector_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **source_connector_id** | **str**| Source Connector ID | 

### Return type

[**OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response**](OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector deleted successfully |  -  |
**400** | Connector in use by pipelines |  -  |
**404** | Connector not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_sources_source_connector_id_get**
> OrgOrganizationIdConnectorsSourcesSourceConnectorIdGet200Response org_organization_id_connectors_sources_source_connector_id_get(organization_id, source_connector_id)

Get source connector details

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_sources_source_connector_id_get200_response import OrgOrganizationIdConnectorsSourcesSourceConnectorIdGet200Response
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
    api_instance = vectorize_client.ConnectorsSourcesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    source_connector_id = 'source_connector_id_example' # str | Source Connector ID

    try:
        # Get source connector details
        api_response = await api_instance.org_organization_id_connectors_sources_source_connector_id_get(organization_id, source_connector_id)
        print("The response of ConnectorsSourcesApi->org_organization_id_connectors_sources_source_connector_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourcesApi->org_organization_id_connectors_sources_source_connector_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **source_connector_id** | **str**| Source Connector ID | 

### Return type

[**OrgOrganizationIdConnectorsSourcesSourceConnectorIdGet200Response**](OrgOrganizationIdConnectorsSourcesSourceConnectorIdGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Source connector retrieved successfully |  -  |
**404** | Connector not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_sources_source_connector_id_patch**
> OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatch200Response org_organization_id_connectors_sources_source_connector_id_patch(organization_id, source_connector_id, org_organization_id_connectors_sources_source_connector_id_patch_request)

Update source connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_sources_source_connector_id_patch200_response import OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatch200Response
from vectorize_client.models.org_organization_id_connectors_sources_source_connector_id_patch_request import OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatchRequest
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
    api_instance = vectorize_client.ConnectorsSourcesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    source_connector_id = 'source_connector_id_example' # str | Source Connector ID
    org_organization_id_connectors_sources_source_connector_id_patch_request = vectorize_client.OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatchRequest() # OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatchRequest | 

    try:
        # Update source connector
        api_response = await api_instance.org_organization_id_connectors_sources_source_connector_id_patch(organization_id, source_connector_id, org_organization_id_connectors_sources_source_connector_id_patch_request)
        print("The response of ConnectorsSourcesApi->org_organization_id_connectors_sources_source_connector_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourcesApi->org_organization_id_connectors_sources_source_connector_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **source_connector_id** | **str**| Source Connector ID | 
 **org_organization_id_connectors_sources_source_connector_id_patch_request** | [**OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatchRequest**](OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatchRequest.md)|  | 

### Return type

[**OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatch200Response**](OrgOrganizationIdConnectorsSourcesSourceConnectorIdPatch200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector updated successfully |  -  |
**400** | Invalid connector configuration |  -  |
**404** | Connector not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

