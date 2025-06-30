# QDRANTConfig

Configuration for Qdrant connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **str** | Collection Name. Example: Enter collection name | 

## Example

```python
from vectorize_client.models.qdrant_config import QDRANTConfig

# TODO update the JSON string below
json = "{}"
# create an instance of QDRANTConfig from a JSON string
qdrant_config_instance = QDRANTConfig.from_json(json)
# print the JSON string representation of the object
print(QDRANTConfig.to_json())

# convert the object into a dict
qdrant_config_dict = qdrant_config_instance.to_dict()
# create an instance of QDRANTConfig from a dict
qdrant_config_from_dict = QDRANTConfig.from_dict(qdrant_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


