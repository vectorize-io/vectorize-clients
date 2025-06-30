# GetPipelinesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**List[PipelineListSummary]**](PipelineListSummary.md) |  | 

## Example

```python
from vectorize_client.models.get_pipelines_response import GetPipelinesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPipelinesResponse from a JSON string
get_pipelines_response_instance = GetPipelinesResponse.from_json(json)
# print the JSON string representation of the object
print(GetPipelinesResponse.to_json())

# convert the object into a dict
get_pipelines_response_dict = get_pipelines_response_instance.to_dict()
# create an instance of GetPipelinesResponse from a dict
get_pipelines_response_from_dict = GetPipelinesResponse.from_dict(get_pipelines_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


