# SINGLESTOREConfig

Configuration for SingleStore connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table** | **str** | Table Name. Example: Enter table name | 

## Example

```python
from vectorize_client.models.singlestore_config import SINGLESTOREConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SINGLESTOREConfig from a JSON string
singlestore_config_instance = SINGLESTOREConfig.from_json(json)
# print the JSON string representation of the object
print(SINGLESTOREConfig.to_json())

# convert the object into a dict
singlestore_config_dict = singlestore_config_instance.to_dict()
# create an instance of SINGLESTOREConfig from a dict
singlestore_config_from_dict = SINGLESTOREConfig.from_dict(singlestore_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


