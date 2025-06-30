# Milvus2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;MILVUS\&quot;) | 

## Example

```python
from vectorize_client.models.milvus2 import Milvus2

# TODO update the JSON string below
json = "{}"
# create an instance of Milvus2 from a JSON string
milvus2_instance = Milvus2.from_json(json)
# print the JSON string representation of the object
print(Milvus2.to_json())

# convert the object into a dict
milvus2_dict = milvus2_instance.to_dict()
# create an instance of Milvus2 from a dict
milvus2_from_dict = Milvus2.from_dict(milvus2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


