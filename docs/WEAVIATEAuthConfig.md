# WEAVIATEAuthConfig

Authentication configuration for Weaviate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Weaviate integration | 
**host** | **str** | Endpoint. Example: Enter your Weaviate Cluster REST Endpoint | 
**api_key** | **str** | API Key. Example: Enter your API key | 

## Example

```python
from vectorize_client.models.weaviate_auth_config import WEAVIATEAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WEAVIATEAuthConfig from a JSON string
weaviate_auth_config_instance = WEAVIATEAuthConfig.from_json(json)
# print the JSON string representation of the object
print(WEAVIATEAuthConfig.to_json())

# convert the object into a dict
weaviate_auth_config_dict = weaviate_auth_config_instance.to_dict()
# create an instance of WEAVIATEAuthConfig from a dict
weaviate_auth_config_from_dict = WEAVIATEAuthConfig.from_dict(weaviate_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


