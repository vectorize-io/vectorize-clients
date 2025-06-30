# GetDeepResearchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ready** | **bool** |  | 
**data** | [**DeepResearchResult**](DeepResearchResult.md) |  | [optional] 

## Example

```python
from vectorize_client.models.get_deep_research_response import GetDeepResearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetDeepResearchResponse from a JSON string
get_deep_research_response_instance = GetDeepResearchResponse.from_json(json)
# print the JSON string representation of the object
print(GetDeepResearchResponse.to_json())

# convert the object into a dict
get_deep_research_response_dict = get_deep_research_response_instance.to_dict()
# create an instance of GetDeepResearchResponse from a dict
get_deep_research_response_from_dict = GetDeepResearchResponse.from_dict(get_deep_research_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


