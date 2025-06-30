# TURBOPUFFERAuthConfig

Authentication configuration for Turbopuffer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Turbopuffer integration | 
**api_key** | **str** | API Key. Example: Enter your API key | 

## Example

```python
from vectorize_client.models.turbopuffer_auth_config import TURBOPUFFERAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TURBOPUFFERAuthConfig from a JSON string
turbopuffer_auth_config_instance = TURBOPUFFERAuthConfig.from_json(json)
# print the JSON string representation of the object
print(TURBOPUFFERAuthConfig.to_json())

# convert the object into a dict
turbopuffer_auth_config_dict = turbopuffer_auth_config_instance.to_dict()
# create an instance of TURBOPUFFERAuthConfig from a dict
turbopuffer_auth_config_from_dict = TURBOPUFFERAuthConfig.from_dict(turbopuffer_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


