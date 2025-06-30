# FIRECRAWLAuthConfig

Authentication configuration for Firecrawl

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**api_key** | **str** | API Key. Example: Enter your Firecrawl API Key | 

## Example

```python
from vectorize_client.models.firecrawl_auth_config import FIRECRAWLAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FIRECRAWLAuthConfig from a JSON string
firecrawl_auth_config_instance = FIRECRAWLAuthConfig.from_json(json)
# print the JSON string representation of the object
print(FIRECRAWLAuthConfig.to_json())

# convert the object into a dict
firecrawl_auth_config_dict = firecrawl_auth_config_instance.to_dict()
# create an instance of FIRECRAWLAuthConfig from a dict
firecrawl_auth_config_from_dict = FIRECRAWLAuthConfig.from_dict(firecrawl_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


