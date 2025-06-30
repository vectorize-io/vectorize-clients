# vectorize_client.FilesApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start_file_upload**](FilesApi.md#start_file_upload) | **POST** /org/{organizationId}/files | Upload a generic file to the platform


# **start_file_upload**
> StartFileUploadResponse start_file_upload(organization_id, start_file_upload_request)

Upload a generic file to the platform

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.start_file_upload_request import StartFileUploadRequest
from vectorize_client.models.start_file_upload_response import StartFileUploadResponse
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
    api_instance = vectorize_client.FilesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    start_file_upload_request = {"name":"My StartFileUploadRequest","contentType":"document"} # StartFileUploadRequest | 

    try:
        # Upload a generic file to the platform
        api_response = api_instance.start_file_upload(organization_id, start_file_upload_request)
        print("The response of FilesApi->start_file_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->start_file_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **start_file_upload_request** | [**StartFileUploadRequest**](StartFileUploadRequest.md)|  | 

### Return type

[**StartFileUploadResponse**](StartFileUploadResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File upload started successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

