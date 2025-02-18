# vectorize_client.FilesApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**org_organization_id_uploads_connector_id_files_delete**](FilesApi.md#org_organization_id_uploads_connector_id_files_delete) | **DELETE** /org/{organizationId}/uploads/{connectorId}/files | Delete a file from the connector storage
[**org_organization_id_uploads_connector_id_files_get**](FilesApi.md#org_organization_id_uploads_connector_id_files_get) | **GET** /org/{organizationId}/uploads/{connectorId}/files | Get files from the connector storage
[**org_organization_id_uploads_connector_id_files_post**](FilesApi.md#org_organization_id_uploads_connector_id_files_post) | **POST** /org/{organizationId}/uploads/{connectorId}/files | Upload a file to the connector storage


# **org_organization_id_uploads_connector_id_files_delete**
> OrgOrganizationIdUploadsConnectorIdFilesDelete200Response org_organization_id_uploads_connector_id_files_delete(organization_id, connector_id, org_organization_id_uploads_connector_id_files_delete_request)

Delete a file from the connector storage

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_uploads_connector_id_files_delete200_response import OrgOrganizationIdUploadsConnectorIdFilesDelete200Response
from vectorize_client.models.org_organization_id_uploads_connector_id_files_delete_request import OrgOrganizationIdUploadsConnectorIdFilesDeleteRequest
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
    api_instance = vectorize_client.FilesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    connector_id = 'connector_id_example' # str | Connector ID
    org_organization_id_uploads_connector_id_files_delete_request = vectorize_client.OrgOrganizationIdUploadsConnectorIdFilesDeleteRequest() # OrgOrganizationIdUploadsConnectorIdFilesDeleteRequest | 

    try:
        # Delete a file from the connector storage
        api_response = await api_instance.org_organization_id_uploads_connector_id_files_delete(organization_id, connector_id, org_organization_id_uploads_connector_id_files_delete_request)
        print("The response of FilesApi->org_organization_id_uploads_connector_id_files_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->org_organization_id_uploads_connector_id_files_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **connector_id** | **str**| Connector ID | 
 **org_organization_id_uploads_connector_id_files_delete_request** | [**OrgOrganizationIdUploadsConnectorIdFilesDeleteRequest**](OrgOrganizationIdUploadsConnectorIdFilesDeleteRequest.md)|  | 

### Return type

[**OrgOrganizationIdUploadsConnectorIdFilesDelete200Response**](OrgOrganizationIdUploadsConnectorIdFilesDelete200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File deleted successfully |  -  |
**400** | Bad request - Missing required parameters |  -  |
**401** | Unauthorized - Invalid or missing authentication |  -  |
**403** | Forbidden - User does not have permission |  -  |
**404** | Not found - Connector or file not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_uploads_connector_id_files_get**
> OrgOrganizationIdUploadsConnectorIdFilesGet200Response org_organization_id_uploads_connector_id_files_get(organization_id, connector_id)

Get files from the connector storage

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_uploads_connector_id_files_get200_response import OrgOrganizationIdUploadsConnectorIdFilesGet200Response
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
    api_instance = vectorize_client.FilesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    connector_id = 'connector_id_example' # str | Connector ID

    try:
        # Get files from the connector storage
        api_response = await api_instance.org_organization_id_uploads_connector_id_files_get(organization_id, connector_id)
        print("The response of FilesApi->org_organization_id_uploads_connector_id_files_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->org_organization_id_uploads_connector_id_files_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **connector_id** | **str**| Connector ID | 

### Return type

[**OrgOrganizationIdUploadsConnectorIdFilesGet200Response**](OrgOrganizationIdUploadsConnectorIdFilesGet200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of files retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **org_organization_id_uploads_connector_id_files_post**
> OrgOrganizationIdUploadsConnectorIdFilesPost200Response org_organization_id_uploads_connector_id_files_post(organization_id, connector_id, file)

Upload a file to the connector storage

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.org_organization_id_uploads_connector_id_files_post200_response import OrgOrganizationIdUploadsConnectorIdFilesPost200Response
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
    api_instance = vectorize_client.FilesApi(api_client)
    organization_id = 'organization_id_example' # str | Organization ID
    connector_id = 'connector_id_example' # str | Connector ID
    file = None # bytearray | 

    try:
        # Upload a file to the connector storage
        api_response = await api_instance.org_organization_id_uploads_connector_id_files_post(organization_id, connector_id, file)
        print("The response of FilesApi->org_organization_id_uploads_connector_id_files_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->org_organization_id_uploads_connector_id_files_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**| Organization ID | 
 **connector_id** | **str**| Connector ID | 
 **file** | **bytearray**|  | 

### Return type

[**OrgOrganizationIdUploadsConnectorIdFilesPost200Response**](OrgOrganizationIdUploadsConnectorIdFilesPost200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File uploaded successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

