# WebCrawler2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;WEB_CRAWLER\&quot;) | 

## Example

```python
from vectorize_client.models.web_crawler2 import WebCrawler2

# TODO update the JSON string below
json = "{}"
# create an instance of WebCrawler2 from a JSON string
web_crawler2_instance = WebCrawler2.from_json(json)
# print the JSON string representation of the object
print(WebCrawler2.to_json())

# convert the object into a dict
web_crawler2_dict = web_crawler2_instance.to_dict()
# create an instance of WebCrawler2 from a dict
web_crawler2_from_dict = WebCrawler2.from_dict(web_crawler2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


