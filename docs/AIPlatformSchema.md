# AIPlatformSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | [**AIPlatformType**](AIPlatformType.md) |  | 
**config** | [**AIPlatformConfigSchema**](AIPlatformConfigSchema.md) |  | 

## Example

```python
from vectorize_client.models.ai_platform_schema import AIPlatformSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AIPlatformSchema from a JSON string
ai_platform_schema_instance = AIPlatformSchema.from_json(json)
# print the JSON string representation of the object
print(AIPlatformSchema.to_json())

# convert the object into a dict
ai_platform_schema_dict = ai_platform_schema_instance.to_dict()
# create an instance of AIPlatformSchema from a dict
ai_platform_schema_from_dict = AIPlatformSchema.from_dict(ai_platform_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


