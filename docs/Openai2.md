# Openai2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;OPENAI\&quot;) | 

## Example

```python
from vectorize_client.models.openai2 import Openai2

# TODO update the JSON string below
json = "{}"
# create an instance of Openai2 from a JSON string
openai2_instance = Openai2.from_json(json)
# print the JSON string representation of the object
print(Openai2.to_json())

# convert the object into a dict
openai2_dict = openai2_instance.to_dict()
# create an instance of Openai2 from a dict
openai2_from_dict = Openai2.from_dict(openai2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


