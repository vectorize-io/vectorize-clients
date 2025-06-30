# DATASTAXConfig

Configuration for DataStax Astra connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **str** | Collection Name. Example: Enter collection name | 

## Example

```python
from vectorize_client.models.datastax_config import DATASTAXConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DATASTAXConfig from a JSON string
datastax_config_instance = DATASTAXConfig.from_json(json)
# print the JSON string representation of the object
print(DATASTAXConfig.to_json())

# convert the object into a dict
datastax_config_dict = datastax_config_instance.to_dict()
# create an instance of DATASTAXConfig from a dict
datastax_config_from_dict = DATASTAXConfig.from_dict(datastax_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


