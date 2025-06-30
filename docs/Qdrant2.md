# Qdrant2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;QDRANT\&quot;) | 

## Example

```python
from vectorize_client.models.qdrant2 import Qdrant2

# TODO update the JSON string below
json = "{}"
# create an instance of Qdrant2 from a JSON string
qdrant2_instance = Qdrant2.from_json(json)
# print the JSON string representation of the object
print(Qdrant2.to_json())

# convert the object into a dict
qdrant2_dict = qdrant2_instance.to_dict()
# create an instance of Qdrant2 from a dict
qdrant2_from_dict = Qdrant2.from_dict(qdrant2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


