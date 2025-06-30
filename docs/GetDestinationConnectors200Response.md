# GetDestinationConnectors200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_connectors** | [**List[DestinationConnector]**](DestinationConnector.md) |  | 

## Example

```python
from vectorize_client.models.get_destination_connectors200_response import GetDestinationConnectors200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetDestinationConnectors200Response from a JSON string
get_destination_connectors200_response_instance = GetDestinationConnectors200Response.from_json(json)
# print the JSON string representation of the object
print(GetDestinationConnectors200Response.to_json())

# convert the object into a dict
get_destination_connectors200_response_dict = get_destination_connectors200_response_instance.to_dict()
# create an instance of GetDestinationConnectors200Response from a dict
get_destination_connectors200_response_from_dict = GetDestinationConnectors200Response.from_dict(get_destination_connectors200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


