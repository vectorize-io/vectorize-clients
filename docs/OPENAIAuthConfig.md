# OPENAIAuthConfig

Authentication configuration for OpenAI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your OpenAI integration | 
**key** | **str** | API Key. Example: Enter your OpenAI API Key | 

## Example

```python
from vectorize_client.models.openai_auth_config import OPENAIAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OPENAIAuthConfig from a JSON string
openai_auth_config_instance = OPENAIAuthConfig.from_json(json)
# print the JSON string representation of the object
print(OPENAIAuthConfig.to_json())

# convert the object into a dict
openai_auth_config_dict = openai_auth_config_instance.to_dict()
# create an instance of OPENAIAuthConfig from a dict
openai_auth_config_from_dict = OPENAIAuthConfig.from_dict(openai_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


