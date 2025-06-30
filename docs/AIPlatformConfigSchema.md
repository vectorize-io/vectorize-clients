# AIPlatformConfigSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedding_model** | **str** |  | [optional] 
**chunking_strategy** | **str** |  | [optional] 
**chunk_size** | **int** |  | [optional] 
**chunk_overlap** | **int** |  | [optional] 
**dimensions** | **int** |  | [optional] 
**extraction_strategy** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.ai_platform_config_schema import AIPlatformConfigSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AIPlatformConfigSchema from a JSON string
ai_platform_config_schema_instance = AIPlatformConfigSchema.from_json(json)
# print the JSON string representation of the object
print(AIPlatformConfigSchema.to_json())

# convert the object into a dict
ai_platform_config_schema_dict = ai_platform_config_schema_instance.to_dict()
# create an instance of AIPlatformConfigSchema from a dict
ai_platform_config_schema_from_dict = AIPlatformConfigSchema.from_dict(ai_platform_config_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


