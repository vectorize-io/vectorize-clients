# UpdateAIPlatformConnectorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**UpdatedAIPlatformConnectorData**](UpdatedAIPlatformConnectorData.md) |  | 

## Example

```python
from vectorize_client.models.update_ai_platform_connector_response import UpdateAIPlatformConnectorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAIPlatformConnectorResponse from a JSON string
update_ai_platform_connector_response_instance = UpdateAIPlatformConnectorResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateAIPlatformConnectorResponse.to_json())

# convert the object into a dict
update_ai_platform_connector_response_dict = update_ai_platform_connector_response_instance.to_dict()
# create an instance of UpdateAIPlatformConnectorResponse from a dict
update_ai_platform_connector_response_from_dict = UpdateAIPlatformConnectorResponse.from_dict(update_ai_platform_connector_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


