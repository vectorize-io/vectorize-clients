# Qdrant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;QDRANT\&quot;) | 
**config** | [**QDRANTConfig**](QDRANTConfig.md) |  | 

## Example

```python
from vectorize_client.models.qdrant import Qdrant

# TODO update the JSON string below
json = "{}"
# create an instance of Qdrant from a JSON string
qdrant_instance = Qdrant.from_json(json)
# print the JSON string representation of the object
print(Qdrant.to_json())

# convert the object into a dict
qdrant_dict = qdrant_instance.to_dict()
# create an instance of Qdrant from a dict
qdrant_from_dict = Qdrant.from_dict(qdrant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


