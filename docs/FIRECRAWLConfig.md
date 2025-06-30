# FIRECRAWLConfig

Configuration for Firecrawl connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | Endpoint. Example: Choose which api endpoint to use | [default to 'Crawl']
**request** | **object** | Request Body. Example: JSON config for firecrawl&#39;s /crawl or /scrape endpoint. | 

## Example

```python
from vectorize_client.models.firecrawl_config import FIRECRAWLConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FIRECRAWLConfig from a JSON string
firecrawl_config_instance = FIRECRAWLConfig.from_json(json)
# print the JSON string representation of the object
print(FIRECRAWLConfig.to_json())

# convert the object into a dict
firecrawl_config_dict = firecrawl_config_instance.to_dict()
# create an instance of FIRECRAWLConfig from a dict
firecrawl_config_from_dict = FIRECRAWLConfig.from_dict(firecrawl_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


