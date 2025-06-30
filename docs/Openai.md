# Openai


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;OPENAI\&quot;) | 
**config** | [**OPENAIAuthConfig**](OPENAIAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.openai import Openai

# TODO update the JSON string below
json = "{}"
# create an instance of Openai from a JSON string
openai_instance = Openai.from_json(json)
# print the JSON string representation of the object
print(Openai.to_json())

# convert the object into a dict
openai_dict = openai_instance.to_dict()
# create an instance of Openai from a dict
openai_from_dict = Openai.from_dict(openai_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


