# GetAIPlatformConnectors200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_platform_connectors** | [**List[AIPlatform]**](AIPlatform.md) |  | 

## Example

```python
from vectorize_client.models.get_ai_platform_connectors200_response import GetAIPlatformConnectors200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAIPlatformConnectors200Response from a JSON string
get_ai_platform_connectors200_response_instance = GetAIPlatformConnectors200Response.from_json(json)
# print the JSON string representation of the object
print(GetAIPlatformConnectors200Response.to_json())

# convert the object into a dict
get_ai_platform_connectors200_response_dict = get_ai_platform_connectors200_response_instance.to_dict()
# create an instance of GetAIPlatformConnectors200Response from a dict
get_ai_platform_connectors200_response_from_dict = GetAIPlatformConnectors200Response.from_dict(get_ai_platform_connectors200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


