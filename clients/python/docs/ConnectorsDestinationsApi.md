# vectorize_client.ConnectorsDestinationsApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**org_organization_id_connectors_destinations_destination_connector_id_delete**](ConnectorsDestinationsApi.md#org_organization_id_connectors_destinations_destination_connector_id_delete) | **DELETE** /org/{organizationId}/connectors/destinations/{destinationConnectorId} | Delete a destination connector
[**org_organization_id_connectors_destinations_destination_connector_id_get**](ConnectorsDestinationsApi.md#org_organization_id_connectors_destinations_destination_connector_id_get) | **GET** /org/{organizationId}/connectors/destinations/{destinationConnectorId} | Get a destination connector
[**org_organization_id_connectors_destinations_destination_connector_id_patch**](ConnectorsDestinationsApi.md#org_organization_id_connectors_destinations_destination_connector_id_patch) | **PATCH** /org/{organizationId}/connectors/destinations/{destinationConnectorId} | Update a destination connector
[**org_organization_id_connectors_destinations_get**](ConnectorsDestinationsApi.md#org_organization_id_connectors_destinations_get) | **GET** /org/{organizationId}/connectors/destinations | List destination connectors
[**org_organization_id_connectors_destinations_post**](ConnectorsDestinationsApi.md#org_organization_id_connectors_destinations_post) | **POST** /org/{organizationId}/connectors/destinations | Create destination connectors


# **org_organization_id_connectors_destinations_destination_connector_id_delete**
> OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response org_organization_id_connectors_destinations_destination_connector_id_delete(organization_id, destination_connector_id)

Delete a destination connector

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
    api_instance = vectorize_client.ConnectorsDestinationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    destination_connector_id = 'destination_connector_id_example' # str | Destination connector ID

    try:
        # Delete a destination connector
        api_response = await api_instance.org_organization_id_connectors_destinations_destination_connector_id_delete(organization_id, destination_connector_id)
        print("The response of ConnectorsDestinationsApi->org_organization_id_connectors_destinations_destination_connector_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationsApi->org_organization_id_connectors_destinations_destination_connector_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **destination_connector_id** | **str**| Destination connector ID | 

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
**200** | Destination connector deleted successfully |  -  |
**400** | Bad request - Connector is in use by pipelines |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_destinations_destination_connector_id_get**
> OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner org_organization_id_connectors_destinations_destination_connector_id_get(organization_id, destination_connector_id)

Get a destination connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_aiplatforms_get200_response_formatted_connectors_inner import OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner
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
    api_instance = vectorize_client.ConnectorsDestinationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    destination_connector_id = 'destination_connector_id_example' # str | Destination connector ID

    try:
        # Get a destination connector
        api_response = await api_instance.org_organization_id_connectors_destinations_destination_connector_id_get(organization_id, destination_connector_id)
        print("The response of ConnectorsDestinationsApi->org_organization_id_connectors_destinations_destination_connector_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationsApi->org_organization_id_connectors_destinations_destination_connector_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **destination_connector_id** | **str**| Destination connector ID | 

### Return type

[**OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner**](OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Destination connector retrieved successfully |  -  |
**404** | Destination connector not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_destinations_destination_connector_id_patch**
> OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response org_organization_id_connectors_destinations_destination_connector_id_patch(organization_id, destination_connector_id, org_organization_id_connectors_destinations_destination_connector_id_patch_request)

Update a destination connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_destinations_destination_connector_id_delete200_response import OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response
from vectorize_client.models.org_organization_id_connectors_destinations_destination_connector_id_patch_request import OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdPatchRequest
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
    api_instance = vectorize_client.ConnectorsDestinationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    destination_connector_id = 'destination_connector_id_example' # str | Destination connector ID
    org_organization_id_connectors_destinations_destination_connector_id_patch_request = vectorize_client.OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdPatchRequest() # OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdPatchRequest | 

    try:
        # Update a destination connector
        api_response = await api_instance.org_organization_id_connectors_destinations_destination_connector_id_patch(organization_id, destination_connector_id, org_organization_id_connectors_destinations_destination_connector_id_patch_request)
        print("The response of ConnectorsDestinationsApi->org_organization_id_connectors_destinations_destination_connector_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationsApi->org_organization_id_connectors_destinations_destination_connector_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **destination_connector_id** | **str**| Destination connector ID | 
 **org_organization_id_connectors_destinations_destination_connector_id_patch_request** | [**OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdPatchRequest**](OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdPatchRequest.md)|  | 

### Return type

[**OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response**](OrgOrganizationIdConnectorsDestinationsDestinationConnectorIdDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Destination connector updated successfully |  -  |
**400** | Bad request |  -  |
**404** | Destination connector not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_destinations_get**
> OrgOrganizationIdConnectorsDestinationsGet200Response org_organization_id_connectors_destinations_get(organization_id)

List destination connectors

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_connectors_destinations_get200_response import OrgOrganizationIdConnectorsDestinationsGet200Response
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
    api_instance = vectorize_client.ConnectorsDestinationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID

    try:
        # List destination connectors
        api_response = await api_instance.org_organization_id_connectors_destinations_get(organization_id)
        print("The response of ConnectorsDestinationsApi->org_organization_id_connectors_destinations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationsApi->org_organization_id_connectors_destinations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 

### Return type

[**OrgOrganizationIdConnectorsDestinationsGet200Response**](OrgOrganizationIdConnectorsDestinationsGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Destination connectors retrieved successfully |  -  |
**404** | No connectors found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_connectors_destinations_post**
> OrgOrganizationIdConnectorsDestinationsPost200Response org_organization_id_connectors_destinations_post(organization_id, request_body)

Create destination connectors

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
    api_instance = vectorize_client.ConnectorsDestinationsApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    request_body = None # List[object] | 

    try:
        # Create destination connectors
        api_response = await api_instance.org_organization_id_connectors_destinations_post(organization_id, request_body)
        print("The response of ConnectorsDestinationsApi->org_organization_id_connectors_destinations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationsApi->org_organization_id_connectors_destinations_post: %s\n" % e)
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

