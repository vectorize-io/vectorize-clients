# TURBOPUFFERConfig

Configuration for Turbopuffer connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **str** | Namespace. Example: Enter namespace name | 

## Example

```python
from vectorize_client.models.turbopuffer_config import TURBOPUFFERConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TURBOPUFFERConfig from a JSON string
turbopuffer_config_instance = TURBOPUFFERConfig.from_json(json)
# print the JSON string representation of the object
print(TURBOPUFFERConfig.to_json())

# convert the object into a dict
turbopuffer_config_dict = turbopuffer_config_instance.to_dict()
# create an instance of TURBOPUFFERConfig from a dict
turbopuffer_config_from_dict = TURBOPUFFERConfig.from_dict(turbopuffer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


