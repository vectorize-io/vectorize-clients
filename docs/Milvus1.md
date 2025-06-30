# Milvus1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**MILVUSConfig**](MILVUSConfig.md) |  | [optional] 

## Example

```python
from vectorize_client.models.milvus1 import Milvus1

# TODO update the JSON string below
json = "{}"
# create an instance of Milvus1 from a JSON string
milvus1_instance = Milvus1.from_json(json)
# print the JSON string representation of the object
print(Milvus1.to_json())

# convert the object into a dict
milvus1_dict = milvus1_instance.to_dict()
# create an instance of Milvus1 from a dict
milvus1_from_dict = Milvus1.from_dict(milvus1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


