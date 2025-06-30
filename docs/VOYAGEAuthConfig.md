# VOYAGEAuthConfig

Authentication configuration for Voyage AI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Voyage AI integration | 
**key** | **str** | API Key. Example: Enter your Voyage AI API Key | 

## Example

```python
from vectorize_client.models.voyage_auth_config import VOYAGEAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VOYAGEAuthConfig from a JSON string
voyage_auth_config_instance = VOYAGEAuthConfig.from_json(json)
# print the JSON string representation of the object
print(VOYAGEAuthConfig.to_json())

# convert the object into a dict
voyage_auth_config_dict = voyage_auth_config_instance.to_dict()
# create an instance of VOYAGEAuthConfig from a dict
voyage_auth_config_from_dict = VOYAGEAuthConfig.from_dict(voyage_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


