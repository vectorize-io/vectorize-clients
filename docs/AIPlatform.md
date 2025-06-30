# AIPlatform


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**name** | **str** |  | 
**config_doc** | **Dict[str, Optional[object]]** |  | [optional] 
**created_at** | **str** |  | [optional] 
**created_by_id** | **str** |  | [optional] 
**last_updated_by_id** | **str** |  | [optional] 
**created_by_email** | **str** |  | [optional] 
**last_updated_by_email** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**verification_status** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.ai_platform import AIPlatform

# TODO update the JSON string below
json = "{}"
# create an instance of AIPlatform from a JSON string
ai_platform_instance = AIPlatform.from_json(json)
# print the JSON string representation of the object
print(AIPlatform.to_json())

# convert the object into a dict
ai_platform_dict = ai_platform_instance.to_dict()
# create an instance of AIPlatform from a dict
ai_platform_from_dict = AIPlatform.from_dict(ai_platform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


