# vectorize_client.UploadsApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_file_from_connector**](UploadsApi.md#delete_file_from_connector) | **DELETE** /org/{organizationId}/uploads/{connectorId}/files | Delete a file from a file upload connector
[**get_upload_files_from_connector**](UploadsApi.md#get_upload_files_from_connector) | **GET** /org/{organizationId}/uploads/{connectorId}/files | Get uploaded files from a file upload connector
[**start_file_upload_to_connector**](UploadsApi.md#start_file_upload_to_connector) | **PUT** /org/{organizationId}/uploads/{connectorId}/files | Upload a file to a file upload connector


# **delete_file_from_connector**
> DeleteFileResponse delete_file_from_connector(organization, connector_id)

Delete a file from a file upload connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.delete_file_response import DeleteFileResponse
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
    api_instance = vectorize_client.UploadsApi(api_client)
    organization = 'organization_example' # str | 
    connector_id = 'connector_id_example' # str | 

    try:
        # Delete a file from a file upload connector
        api_response = api_instance.delete_file_from_connector(organization, connector_id)
        print("The response of UploadsApi->delete_file_from_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UploadsApi->delete_file_from_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **connector_id** | **str**|  | 

### Return type

[**DeleteFileResponse**](DeleteFileResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File deleted successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_upload_files_from_connector**
> GetUploadFilesResponse get_upload_files_from_connector(organization, connector_id)

Get uploaded files from a file upload connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_upload_files_response import GetUploadFilesResponse
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
    api_instance = vectorize_client.UploadsApi(api_client)
    organization = 'organization_example' # str | 
    connector_id = 'connector_id_example' # str | 

    try:
        # Get uploaded files from a file upload connector
        api_response = api_instance.get_upload_files_from_connector(organization, connector_id)
        print("The response of UploadsApi->get_upload_files_from_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UploadsApi->get_upload_files_from_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **connector_id** | **str**|  | 

### Return type

[**GetUploadFilesResponse**](GetUploadFilesResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Files retrieved successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_file_upload_to_connector**
> StartFileUploadToConnectorResponse start_file_upload_to_connector(organization, connector_id, start_file_upload_to_connector_request)

Upload a file to a file upload connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.start_file_upload_to_connector_request import StartFileUploadToConnectorRequest
from vectorize_client.models.start_file_upload_to_connector_response import StartFileUploadToConnectorResponse
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
    api_instance = vectorize_client.UploadsApi(api_client)
    organization = 'organization_example' # str | 
    connector_id = 'connector_id_example' # str | 
    start_file_upload_to_connector_request = {"name":"My StartFileUploadToConnectorRequest","contentType":"document","metadata":"example-metadata"} # StartFileUploadToConnectorRequest | 

    try:
        # Upload a file to a file upload connector
        api_response = api_instance.start_file_upload_to_connector(organization, connector_id, start_file_upload_to_connector_request)
        print("The response of UploadsApi->start_file_upload_to_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UploadsApi->start_file_upload_to_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **connector_id** | **str**|  | 
 **start_file_upload_to_connector_request** | [**StartFileUploadToConnectorRequest**](StartFileUploadToConnectorRequest.md)|  | 

### Return type

[**StartFileUploadToConnectorResponse**](StartFileUploadToConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File ready to be uploaded |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

