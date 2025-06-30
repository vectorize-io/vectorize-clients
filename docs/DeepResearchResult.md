# DeepResearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | 
**events** | **List[str]** |  | [optional] 
**markdown** | **str** |  | [optional] 
**error** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.deep_research_result import DeepResearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeepResearchResult from a JSON string
deep_research_result_instance = DeepResearchResult.from_json(json)
# print the JSON string representation of the object
print(DeepResearchResult.to_json())

# convert the object into a dict
deep_research_result_dict = deep_research_result_instance.to_dict()
# create an instance of DeepResearchResult from a dict
deep_research_result_from_dict = DeepResearchResult.from_dict(deep_research_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


