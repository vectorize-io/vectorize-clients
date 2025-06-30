# WEBCRAWLERAuthConfig

Authentication configuration for Web Crawler

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**seed_urls** | **str** | Seed URL(s). Add one or more seed URLs to crawl. The crawler will start from these URLs and follow links to other pages.. Example: (e.g. https://example.com) | 

## Example

```python
from vectorize_client.models.webcrawler_auth_config import WEBCRAWLERAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WEBCRAWLERAuthConfig from a JSON string
webcrawler_auth_config_instance = WEBCRAWLERAuthConfig.from_json(json)
# print the JSON string representation of the object
print(WEBCRAWLERAuthConfig.to_json())

# convert the object into a dict
webcrawler_auth_config_dict = webcrawler_auth_config_instance.to_dict()
# create an instance of WEBCRAWLERAuthConfig from a dict
webcrawler_auth_config_from_dict = WEBCRAWLERAuthConfig.from_dict(webcrawler_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


