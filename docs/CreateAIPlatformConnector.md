# CreateAIPlatformConnector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | [**AIPlatformType**](AIPlatformType.md) |  | 
**config** | **Dict[str, Optional[object]]** |  | [optional] 

## Example

```python
from vectorize_client.models.create_ai_platform_connector import CreateAIPlatformConnector

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAIPlatformConnector from a JSON string
create_ai_platform_connector_instance = CreateAIPlatformConnector.from_json(json)
# print the JSON string representation of the object
print(CreateAIPlatformConnector.to_json())

# convert the object into a dict
create_ai_platform_connector_dict = create_ai_platform_connector_instance.to_dict()
# create an instance of CreateAIPlatformConnector from a dict
create_ai_platform_connector_from_dict = CreateAIPlatformConnector.from_dict(create_ai_platform_connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


