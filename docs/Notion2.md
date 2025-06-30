# Notion2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;NOTION\&quot;) | 

## Example

```python
from vectorize_client.models.notion2 import Notion2

# TODO update the JSON string below
json = "{}"
# create an instance of Notion2 from a JSON string
notion2_instance = Notion2.from_json(json)
# print the JSON string representation of the object
print(Notion2.to_json())

# convert the object into a dict
notion2_dict = notion2_instance.to_dict()
# create an instance of Notion2 from a dict
notion2_from_dict = Notion2.from_dict(notion2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


