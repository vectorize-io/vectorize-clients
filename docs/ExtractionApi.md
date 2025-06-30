# vectorize_client.ExtractionApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_extraction_result**](ExtractionApi.md#get_extraction_result) | **GET** /org/{organizationId}/extraction/{extractionId} | Get extraction result
[**start_extraction**](ExtractionApi.md#start_extraction) | **POST** /org/{organizationId}/extraction | Start content extraction from a file


# **get_extraction_result**
> ExtractionResultResponse get_extraction_result(organization, extraction_id)

Get extraction result

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.extraction_result_response import ExtractionResultResponse
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
    api_instance = vectorize_client.ExtractionApi(api_client)
    organization = 'organization_example' # str | 
    extraction_id = 'extraction_id_example' # str | 

    try:
        # Get extraction result
        api_response = api_instance.get_extraction_result(organization, extraction_id)
        print("The response of ExtractionApi->get_extraction_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExtractionApi->get_extraction_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **extraction_id** | **str**|  | 

### Return type

[**ExtractionResultResponse**](ExtractionResultResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Extraction started successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_extraction**
> StartExtractionResponse start_extraction(organization_id, start_extraction_request)

Start content extraction from a file

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.start_extraction_request import StartExtractionRequest
from vectorize_client.models.start_extraction_response import StartExtractionResponse
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
    api_instance = vectorize_client.ExtractionApi(api_client)
    organization_id = 'organization_id_example' # str | 
    start_extraction_request = {"fileId":"2a53d7fa-748a-4b7f-a35b-e5f73944f444","type":"iris","chunkingStrategy":"markdown","chunkSize":20,"metadata":{"schemas":[],"inferSchema":true}} # StartExtractionRequest | 

    try:
        # Start content extraction from a file
        api_response = api_instance.start_extraction(organization_id, start_extraction_request)
        print("The response of ExtractionApi->start_extraction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExtractionApi->start_extraction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **start_extraction_request** | [**StartExtractionRequest**](StartExtractionRequest.md)|  | 

### Return type

[**StartExtractionResponse**](StartExtractionResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Extraction started successfully |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

