# AdvancedQuery

Advanced query configuration for document retrieval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Query mode - text, vector, or hybrid | [optional] [default to 'vector']
**text_fields** | **List[str]** | Fields to search in text mode | [optional] 
**match_type** | **str** | Text matching type | [optional] 
**text_boost** | **float** | Boost factor for text queries | [optional] [default to 1.0]
**filters** | **Dict[str, object]** | Filters to apply to the query (Elasticsearch-style filters) | [optional] 

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


