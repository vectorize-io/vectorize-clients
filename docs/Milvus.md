# Milvus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;MILVUS\&quot;) | 
**config** | [**MILVUSConfig**](MILVUSConfig.md) |  | 

## Example

```python
from vectorize_client.models.milvus import Milvus

# TODO update the JSON string below
json = "{}"
# create an instance of Milvus from a JSON string
milvus_instance = Milvus.from_json(json)
# print the JSON string representation of the object
print(Milvus.to_json())

# convert the object into a dict
milvus_dict = milvus_instance.to_dict()
# create an instance of Milvus from a dict
milvus_from_dict = Milvus.from_dict(milvus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


