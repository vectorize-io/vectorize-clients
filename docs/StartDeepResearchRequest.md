# StartDeepResearchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** |  | 
**web_search** | **bool** |  | [optional] [default to False]
**var_schema** | **str** |  | [optional] 
**n8n** | [**N8NConfig**](N8NConfig.md) |  | [optional] 

## Example

```python
from vectorize_client.models.start_deep_research_request import StartDeepResearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartDeepResearchRequest from a JSON string
start_deep_research_request_instance = StartDeepResearchRequest.from_json(json)
# print the JSON string representation of the object
print(StartDeepResearchRequest.to_json())

# convert the object into a dict
start_deep_research_request_dict = start_deep_research_request_instance.to_dict()
# create an instance of StartDeepResearchRequest from a dict
start_deep_research_request_from_dict = StartDeepResearchRequest.from_dict(start_deep_research_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


