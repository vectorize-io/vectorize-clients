# FIREFLIESAuthConfig

Authentication configuration for Fireflies.ai

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**api_key** | **str** | API Key. Example: Enter your Fireflies.ai API key | 

## Example

```python
from vectorize_client.models.fireflies_auth_config import FIREFLIESAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FIREFLIESAuthConfig from a JSON string
fireflies_auth_config_instance = FIREFLIESAuthConfig.from_json(json)
# print the JSON string representation of the object
print(FIREFLIESAuthConfig.to_json())

# convert the object into a dict
fireflies_auth_config_dict = fireflies_auth_config_instance.to_dict()
# create an instance of FIREFLIESAuthConfig from a dict
fireflies_auth_config_from_dict = FIREFLIESAuthConfig.from_dict(fireflies_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


