# WebCrawler


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;WEB_CRAWLER\&quot;) | 
**config** | [**WEBCRAWLERConfig**](WEBCRAWLERConfig.md) |  | 

## Example

```python
from vectorize_client.models.web_crawler import WebCrawler

# TODO update the JSON string below
json = "{}"
# create an instance of WebCrawler from a JSON string
web_crawler_instance = WebCrawler.from_json(json)
# print the JSON string representation of the object
print(WebCrawler.to_json())

# convert the object into a dict
web_crawler_dict = web_crawler_instance.to_dict()
# create an instance of WebCrawler from a dict
web_crawler_from_dict = WebCrawler.from_dict(web_crawler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


