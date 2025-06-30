# WEAVIATEConfig

Configuration for Weaviate connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **str** | Collection Name. Example: Enter collection name | 

## Example

```python
from vectorize_client.models.weaviate_config import WEAVIATEConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WEAVIATEConfig from a JSON string
weaviate_config_instance = WEAVIATEConfig.from_json(json)
# print the JSON string representation of the object
print(WEAVIATEConfig.to_json())

# convert the object into a dict
weaviate_config_dict = weaviate_config_instance.to_dict()
# create an instance of WEAVIATEConfig from a dict
weaviate_config_from_dict = WEAVIATEConfig.from_dict(weaviate_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


