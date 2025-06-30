# WEBCRAWLERConfig

Configuration for Web Crawler connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_domains_opt** | **str** | Additional Allowed URLs or prefix(es). Add one or more allowed URLs or URL prefixes. The crawler will read URLs that match these patterns in addition to the seed URL(s).. Example: (e.g. https://docs.example.com) | [optional] 
**forbidden_paths** | **str** | Forbidden Paths. Example: Enter forbidden paths (e.g. /admin) | [optional] 
**min_time_between_requests** | **float** | Throttle (ms). Example: Enter minimum time between requests in milliseconds | [optional] [default to 500]
**max_error_count** | **float** | Max Error Count. Example: Enter maximum error count | [optional] [default to 5]
**max_urls** | **float** | Max URLs. Example: Enter maximum number of URLs to crawl | [optional] [default to 1000]
**max_depth** | **float** | Max Depth. Example: Enter maximum crawl depth | [optional] [default to 50]
**reindex_interval_seconds** | **float** | Reindex Interval (seconds). Example: Enter reindex interval in seconds | [optional] [default to 3600]

## Example

```python
from vectorize_client.models.webcrawler_config import WEBCRAWLERConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WEBCRAWLERConfig from a JSON string
webcrawler_config_instance = WEBCRAWLERConfig.from_json(json)
# print the JSON string representation of the object
print(WEBCRAWLERConfig.to_json())

# convert the object into a dict
webcrawler_config_dict = webcrawler_config_instance.to_dict()
# create an instance of WEBCRAWLERConfig from a dict
webcrawler_config_from_dict = WEBCRAWLERConfig.from_dict(webcrawler_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


