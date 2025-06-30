# Qdrant1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**QDRANTConfig**](QDRANTConfig.md) |  | [optional] 

## Example

```python
from vectorize_client.models.qdrant1 import Qdrant1

# TODO update the JSON string below
json = "{}"
# create an instance of Qdrant1 from a JSON string
qdrant1_instance = Qdrant1.from_json(json)
# print the JSON string representation of the object
print(Qdrant1.to_json())

# convert the object into a dict
qdrant1_dict = qdrant1_instance.to_dict()
# create an instance of Qdrant1 from a dict
qdrant1_from_dict = Qdrant1.from_dict(qdrant1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


