# CreateAIPlatformConnectorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**connectors** | [**List[CreatedAIPlatformConnector]**](CreatedAIPlatformConnector.md) |  | 

## Example

```python
from vectorize_client.models.create_ai_platform_connector_response import CreateAIPlatformConnectorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAIPlatformConnectorResponse from a JSON string
create_ai_platform_connector_response_instance = CreateAIPlatformConnectorResponse.from_json(json)
# print the JSON string representation of the object
print(CreateAIPlatformConnectorResponse.to_json())

# convert the object into a dict
create_ai_platform_connector_response_dict = create_ai_platform_connector_response_instance.to_dict()
# create an instance of CreateAIPlatformConnectorResponse from a dict
create_ai_platform_connector_response_from_dict = CreateAIPlatformConnectorResponse.from_dict(create_ai_platform_connector_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


