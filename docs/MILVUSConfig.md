# MILVUSConfig

Configuration for Milvus connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **str** | Collection Name. Example: Enter collection name | 

## Example

```python
from vectorize_client.models.milvus_config import MILVUSConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MILVUSConfig from a JSON string
milvus_config_instance = MILVUSConfig.from_json(json)
# print the JSON string representation of the object
print(MILVUSConfig.to_json())

# convert the object into a dict
milvus_config_dict = milvus_config_instance.to_dict()
# create an instance of MILVUSConfig from a dict
milvus_config_from_dict = MILVUSConfig.from_dict(milvus_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


