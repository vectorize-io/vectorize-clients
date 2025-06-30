# AdvancedQuery

Advanced query parameters for enhanced search capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Search mode: &#39;text&#39;, &#39;vector&#39;, or &#39;hybrid&#39;. Defaults to &#39;vector&#39; if not specified. | [optional] 
**text_fields** | **List[str]** | Fields to perform text search on. | [optional] 
**match_type** | **str** | Type of text match to perform. | [optional] 
**text_boost** | **float** | Multiplier for text search scores. | [optional] 
**filters** | **object** | Elasticsearch-compatible filter object. | [optional] 

## Example

```python
from vectorize_client.models.advanced_query import AdvancedQuery

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedQuery from a JSON string
advanced_query_instance = AdvancedQuery.from_json(json)
# print the JSON string representation of the object
print(AdvancedQuery.to_json())

# convert the object into a dict
advanced_query_dict = advanced_query_instance.to_dict()
# create an instance of AdvancedQuery from a dict
advanced_query_from_dict = AdvancedQuery.from_dict(advanced_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


