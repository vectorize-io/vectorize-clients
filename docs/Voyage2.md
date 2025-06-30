# Voyage2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;VOYAGE\&quot;) | 

## Example

```python
from vectorize_client.models.voyage2 import Voyage2

# TODO update the JSON string below
json = "{}"
# create an instance of Voyage2 from a JSON string
voyage2_instance = Voyage2.from_json(json)
# print the JSON string representation of the object
print(Voyage2.to_json())

# convert the object into a dict
voyage2_dict = voyage2_instance.to_dict()
# create an instance of Voyage2 from a dict
voyage2_from_dict = Voyage2.from_dict(voyage2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


