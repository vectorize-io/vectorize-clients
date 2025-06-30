# GetSourceConnectors200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_connectors** | [**List[SourceConnector]**](SourceConnector.md) |  | 

## Example

```python
from vectorize_client.models.get_source_connectors200_response import GetSourceConnectors200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetSourceConnectors200Response from a JSON string
get_source_connectors200_response_instance = GetSourceConnectors200Response.from_json(json)
# print the JSON string representation of the object
print(GetSourceConnectors200Response.to_json())

# convert the object into a dict
get_source_connectors200_response_dict = get_source_connectors200_response_instance.to_dict()
# create an instance of GetSourceConnectors200Response from a dict
get_source_connectors200_response_from_dict = GetSourceConnectors200Response.from_dict(get_source_connectors200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


