# AIPlatformInput

AI platform configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the AI platform | 
**type** | **str** | Type of AI platform | 
**config** | **object** | Configuration specific to the AI platform | 

## Example

```python
from vectorize_client.models.ai_platform_input import AIPlatformInput

# TODO update the JSON string below
json = "{}"
# create an instance of AIPlatformInput from a JSON string
ai_platform_input_instance = AIPlatformInput.from_json(json)
# print the JSON string representation of the object
print(AIPlatformInput.to_json())

# convert the object into a dict
ai_platform_input_dict = ai_platform_input_instance.to_dict()
# create an instance of AIPlatformInput from a dict
ai_platform_input_from_dict = AIPlatformInput.from_dict(ai_platform_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


