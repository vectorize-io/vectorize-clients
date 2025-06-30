# vectorize_client.ConnectorsDestinationConnectorsApi

All URIs are relative to *https://api.vectorize.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_destination_connector**](ConnectorsDestinationConnectorsApi.md#create_destination_connector) | **POST** /org/{organizationId}/connectors/destinations | Create a new destination connector
[**delete_destination_connector**](ConnectorsDestinationConnectorsApi.md#delete_destination_connector) | **DELETE** /org/{organizationId}/connectors/destinations/{destinationConnectorId} | Delete a destination connector
[**get_destination_connector**](ConnectorsDestinationConnectorsApi.md#get_destination_connector) | **GET** /org/{organizationId}/connectors/destinations/{destinationConnectorId} | Get a destination connector
[**get_destination_connectors**](ConnectorsDestinationConnectorsApi.md#get_destination_connectors) | **GET** /org/{organizationId}/connectors/destinations | Get all existing destination connectors
[**update_destination_connector**](ConnectorsDestinationConnectorsApi.md#update_destination_connector) | **PATCH** /org/{organizationId}/connectors/destinations/{destinationConnectorId} | Update a destination connector


# **create_destination_connector**
> CreateDestinationConnectorResponse create_destination_connector(organization_id, create_destination_connector_request_inner)

Create a new destination connector

Creates a new destination connector for data storage. The specific configuration fields required depend on the connector type selected.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.create_destination_connector_request_inner import CreateDestinationConnectorRequestInner
from vectorize_client.models.create_destination_connector_response import CreateDestinationConnectorResponse
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
    api_instance = vectorize_client.ConnectorsDestinationConnectorsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_destination_connector_request_inner = [{"name":"My CreateDestinationConnectorRequest","type":"CAPELLA","config":{"bucket":"example-bucket","scope":"example-scope","collection":"example-collection","index":"example-index"}}] # List[CreateDestinationConnectorRequestInner] | 

    try:
        # Create a new destination connector
        api_response = api_instance.create_destination_connector(organization_id, create_destination_connector_request_inner)
        print("The response of ConnectorsDestinationConnectorsApi->create_destination_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationConnectorsApi->create_destination_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_destination_connector_request_inner** | [**List[CreateDestinationConnectorRequestInner]**](CreateDestinationConnectorRequestInner.md)|  | 

### Return type

[**CreateDestinationConnectorResponse**](CreateDestinationConnectorResponse.md)

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

# **delete_destination_connector**
> DeleteDestinationConnectorResponse delete_destination_connector(organization, destination_connector_id)

Delete a destination connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.delete_destination_connector_response import DeleteDestinationConnectorResponse
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
    api_instance = vectorize_client.ConnectorsDestinationConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    destination_connector_id = 'destination_connector_id_example' # str | 

    try:
        # Delete a destination connector
        api_response = api_instance.delete_destination_connector(organization, destination_connector_id)
        print("The response of ConnectorsDestinationConnectorsApi->delete_destination_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationConnectorsApi->delete_destination_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **destination_connector_id** | **str**|  | 

### Return type

[**DeleteDestinationConnectorResponse**](DeleteDestinationConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Destination connector successfully deleted |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_destination_connector**
> DestinationConnector get_destination_connector(organization, destination_connector_id)

Get a destination connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.destination_connector import DestinationConnector
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
    api_instance = vectorize_client.ConnectorsDestinationConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    destination_connector_id = 'destination_connector_id_example' # str | 

    try:
        # Get a destination connector
        api_response = api_instance.get_destination_connector(organization, destination_connector_id)
        print("The response of ConnectorsDestinationConnectorsApi->get_destination_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationConnectorsApi->get_destination_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **destination_connector_id** | **str**|  | 

### Return type

[**DestinationConnector**](DestinationConnector.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get a destination connector |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_destination_connectors**
> GetDestinationConnectors200Response get_destination_connectors(organization_id)

Get all existing destination connectors

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.get_destination_connectors200_response import GetDestinationConnectors200Response
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
    api_instance = vectorize_client.ConnectorsDestinationConnectorsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Get all existing destination connectors
        api_response = api_instance.get_destination_connectors(organization_id)
        print("The response of ConnectorsDestinationConnectorsApi->get_destination_connectors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationConnectorsApi->get_destination_connectors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetDestinationConnectors200Response**](GetDestinationConnectors200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all destination connectors |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_destination_connector**
> UpdateDestinationConnectorResponse update_destination_connector(organization, destination_connector_id, update_destination_connector_request)

Update a destination connector

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import vectorize_client
from vectorize_client.models.update_destination_connector_request import UpdateDestinationConnectorRequest
from vectorize_client.models.update_destination_connector_response import UpdateDestinationConnectorResponse
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
    api_instance = vectorize_client.ConnectorsDestinationConnectorsApi(api_client)
    organization = 'organization_example' # str | 
    destination_connector_id = 'destination_connector_id_example' # str | 
    update_destination_connector_request = vectorize_client.UpdateDestinationConnectorRequest() # UpdateDestinationConnectorRequest | 

    try:
        # Update a destination connector
        api_response = api_instance.update_destination_connector(organization, destination_connector_id, update_destination_connector_request)
        print("The response of ConnectorsDestinationConnectorsApi->update_destination_connector:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsDestinationConnectorsApi->update_destination_connector: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**|  | 
 **destination_connector_id** | **str**|  | 
 **update_destination_connector_request** | [**UpdateDestinationConnectorRequest**](UpdateDestinationConnectorRequest.md)|  | 

### Return type

[**UpdateDestinationConnectorResponse**](UpdateDestinationConnectorResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Destination connector successfully updated |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

