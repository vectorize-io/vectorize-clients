# UpdatedAIPlatformConnectorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated_connector** | [**AIPlatform**](AIPlatform.md) |  | 
**pipeline_ids** | **List[str]** |  | [optional] 

## Example

```python
from vectorize_client.models.updated_ai_platform_connector_data import UpdatedAIPlatformConnectorData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatedAIPlatformConnectorData from a JSON string
updated_ai_platform_connector_data_instance = UpdatedAIPlatformConnectorData.from_json(json)
# print the JSON string representation of the object
print(UpdatedAIPlatformConnectorData.to_json())

# convert the object into a dict
updated_ai_platform_connector_data_dict = updated_ai_platform_connector_data_instance.to_dict()
# create an instance of UpdatedAIPlatformConnectorData from a dict
updated_ai_platform_connector_data_from_dict = UpdatedAIPlatformConnectorData.from_dict(updated_ai_platform_connector_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


