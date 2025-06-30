# vectorize_client.ConnectorsSourceConnectorsApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_user_to_source_connector**](ConnectorsSourceConnectorsApi.md#add_user_to_source_connector) | **POST** /org/{organizationId}/connectors/sources/{sourceConnectorId}/users | Add a user to a source connector
[**create_source_connector**](ConnectorsSourceConnectorsApi.md#create_source_connector) | **POST** /org/{organizationId}/connectors/sources | Create a new source connector
[**delete_source_connector**](ConnectorsSourceConnectorsApi.md#delete_source_connector) | **DELETE** /org/{organizationId}/connectors/sources/{sourceConnectorId} | Delete a source connector
[**delete_user_from_source_connector**](ConnectorsSourceConnectorsApi.md#delete_user_from_source_connector) | **DELETE** /org/{organizationId}/connectors/sources/{sourceConnectorId}/users | Delete a source connector user
[**get_source_connector**](ConnectorsSourceConnectorsApi.md#get_source_connector) | **GET** /org/{organizationId}/connectors/sources/{sourceConnectorId} | Get a source connector
[**get_source_connectors**](ConnectorsSourceConnectorsApi.md#get_source_connectors) | **GET** /org/{organizationId}/connectors/sources | Get all existing source connectors
[**update_source_connector**](ConnectorsSourceConnectorsApi.md#update_source_connector) | **PATCH** /org/{organizationId}/connectors/sources/{sourceConnectorId} | Update a source connector
[**update_user_in_source_connector**](ConnectorsSourceConnectorsApi.md#update_user_in_source_connector) | **PATCH** /org/{organizationId}/connectors/sources/{sourceConnectorId}/users | Update a source connector user


# **add_user_to_source_connector**
> AddUserFromSourceConnectorResponse add_user_to_source_connector(organization, source_connector_id, add_user_to_source_connector_request)

Add a user to a source connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.add_user_from_source_connector_response import AddUserFromSourceConnectorResponse
from vectorize_client.models.add_user_to_source_connector_request import AddUserToSourceConnectorRequest
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
    api_instance = vectorize_client.ConnectorsSourceConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    source_connector_id = 'source_connector_id_example' # str | 
    add_user_to_source_connector_request = {"userId":"29cc613c-dcb8-429e-88fe-be19dbd8b312","selectedFiles":{},"refreshToken":"refresh_token_example_123456","accessToken":"access_token_example_123456"} # AddUserToSourceConnectorRequest | 

    try:
        # Add a user to a source connector
        api_response = api_instance.add_user_to_source_connector(organization, source_connector_id, add_user_to_source_connector_request)
        print("The response of ConnectorsSourceConnectorsApi->add_user_to_source_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourceConnectorsApi->add_user_to_source_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **source_connector_id** | **str**|  | 
 **add_user_to_source_connector_request** | [**AddUserToSourceConnectorRequest**](AddUserToSourceConnectorRequest.md)|  | 

### Return type

[**AddUserFromSourceConnectorResponse**](AddUserFromSourceConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User successfully added to the source connector |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_source_connector**
> CreateSourceConnectorResponse create_source_connector(organization_id, create_source_connector_request_inner)

Create a new source connector

Creates a new source connector for data ingestion. The specific configuration fields required depend on the connector type selected.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.create_source_connector_request_inner import CreateSourceConnectorRequestInner
from vectorize_client.models.create_source_connector_response import CreateSourceConnectorResponse
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
    api_instance = vectorize_client.ConnectorsSourceConnectorsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_source_connector_request_inner = [{"name":"My CreateSourceConnectorRequest","type":"AWS_S3","config":{"file-extensions":"pdf","idle-time":300,"recursive":true,"path-prefix":"/example/path","path-metadata-regex":"/example/path","path-regex-group-names":"/example/path"}}] # List[CreateSourceConnectorRequestInner] | 

    try:
        # Create a new source connector
        api_response = api_instance.create_source_connector(organization_id, create_source_connector_request_inner)
        print("The response of ConnectorsSourceConnectorsApi->create_source_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourceConnectorsApi->create_source_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_source_connector_request_inner** | [**List[CreateSourceConnectorRequestInner]**](CreateSourceConnectorRequestInner.md)|  | 

### Return type

[**CreateSourceConnectorResponse**](CreateSourceConnectorResponse.md)

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

# **delete_source_connector**
> DeleteSourceConnectorResponse delete_source_connector(organization, source_connector_id)

Delete a source connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.delete_source_connector_response import DeleteSourceConnectorResponse
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
    api_instance = vectorize_client.ConnectorsSourceConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    source_connector_id = 'source_connector_id_example' # str | 

    try:
        # Delete a source connector
        api_response = api_instance.delete_source_connector(organization, source_connector_id)
        print("The response of ConnectorsSourceConnectorsApi->delete_source_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourceConnectorsApi->delete_source_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **source_connector_id** | **str**|  | 

### Return type

[**DeleteSourceConnectorResponse**](DeleteSourceConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Source connector successfully deleted |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_from_source_connector**
> RemoveUserFromSourceConnectorResponse delete_user_from_source_connector(organization, source_connector_id, remove_user_from_source_connector_request)

Delete a source connector user

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.remove_user_from_source_connector_request import RemoveUserFromSourceConnectorRequest
from vectorize_client.models.remove_user_from_source_connector_response import RemoveUserFromSourceConnectorResponse
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
    api_instance = vectorize_client.ConnectorsSourceConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    source_connector_id = 'source_connector_id_example' # str | 
    remove_user_from_source_connector_request = {"userId":"a3703b11-2eba-45e3-87cd-7e5e7c076e3a"} # RemoveUserFromSourceConnectorRequest | 

    try:
        # Delete a source connector user
        api_response = api_instance.delete_user_from_source_connector(organization, source_connector_id, remove_user_from_source_connector_request)
        print("The response of ConnectorsSourceConnectorsApi->delete_user_from_source_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourceConnectorsApi->delete_user_from_source_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **source_connector_id** | **str**|  | 
 **remove_user_from_source_connector_request** | [**RemoveUserFromSourceConnectorRequest**](RemoveUserFromSourceConnectorRequest.md)|  | 

### Return type

[**RemoveUserFromSourceConnectorResponse**](RemoveUserFromSourceConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User successfully removed from the source connector |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_source_connector**
> SourceConnector get_source_connector(organization, source_connector_id)

Get a source connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.source_connector import SourceConnector
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
    api_instance = vectorize_client.ConnectorsSourceConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    source_connector_id = 'source_connector_id_example' # str | 

    try:
        # Get a source connector
        api_response = api_instance.get_source_connector(organization, source_connector_id)
        print("The response of ConnectorsSourceConnectorsApi->get_source_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourceConnectorsApi->get_source_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **source_connector_id** | **str**|  | 

### Return type

[**SourceConnector**](SourceConnector.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a source connector |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_source_connectors**
> GetSourceConnectors200Response get_source_connectors(organization_id)

Get all existing source connectors

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_source_connectors200_response import GetSourceConnectors200Response
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
    api_instance = vectorize_client.ConnectorsSourceConnectorsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Get all existing source connectors
        api_response = api_instance.get_source_connectors(organization_id)
        print("The response of ConnectorsSourceConnectorsApi->get_source_connectors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourceConnectorsApi->get_source_connectors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetSourceConnectors200Response**](GetSourceConnectors200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all source connectors |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_source_connector**
> UpdateSourceConnectorResponse update_source_connector(organization, source_connector_id, update_source_connector_request)

Update a source connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.update_source_connector_request import UpdateSourceConnectorRequest
from vectorize_client.models.update_source_connector_response import UpdateSourceConnectorResponse
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
    api_instance = vectorize_client.ConnectorsSourceConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    source_connector_id = 'source_connector_id_example' # str | 
    update_source_connector_request = vectorize_client.UpdateSourceConnectorRequest() # UpdateSourceConnectorRequest | 

    try:
        # Update a source connector
        api_response = api_instance.update_source_connector(organization, source_connector_id, update_source_connector_request)
        print("The response of ConnectorsSourceConnectorsApi->update_source_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourceConnectorsApi->update_source_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **source_connector_id** | **str**|  | 
 **update_source_connector_request** | [**UpdateSourceConnectorRequest**](UpdateSourceConnectorRequest.md)|  | 

### Return type

[**UpdateSourceConnectorResponse**](UpdateSourceConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Source connector successfully updated |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_user_in_source_connector**
> UpdateUserInSourceConnectorResponse update_user_in_source_connector(organization, source_connector_id, update_user_in_source_connector_request)

Update a source connector user

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.update_user_in_source_connector_request import UpdateUserInSourceConnectorRequest
from vectorize_client.models.update_user_in_source_connector_response import UpdateUserInSourceConnectorResponse
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
    api_instance = vectorize_client.ConnectorsSourceConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    source_connector_id = 'source_connector_id_example' # str | 
    update_user_in_source_connector_request = {"userId":"1dda2405-5b9d-403a-bdf7-01a78cb796da","selectedFiles":{},"refreshToken":"refresh_token_example_123456","accessToken":"access_token_example_123456"} # UpdateUserInSourceConnectorRequest | 

    try:
        # Update a source connector user
        api_response = api_instance.update_user_in_source_connector(organization, source_connector_id, update_user_in_source_connector_request)
        print("The response of ConnectorsSourceConnectorsApi->update_user_in_source_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsSourceConnectorsApi->update_user_in_source_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **source_connector_id** | **str**|  | 
 **update_user_in_source_connector_request** | [**UpdateUserInSourceConnectorRequest**](UpdateUserInSourceConnectorRequest.md)|  | 

### Return type

[**UpdateUserInSourceConnectorResponse**](UpdateUserInSourceConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User successfully updated in the source connector |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

