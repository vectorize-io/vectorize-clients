# GetPipelineResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**PipelineSummary**](PipelineSummary.md) |  | 

## Example

```python
from vectorize_client.models.get_pipeline_response import GetPipelineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPipelineResponse from a JSON string
get_pipeline_response_instance = GetPipelineResponse.from_json(json)
# print the JSON string representation of the object
print(GetPipelineResponse.to_json())

# convert the object into a dict
get_pipeline_response_dict = get_pipeline_response_instance.to_dict()
# create an instance of GetPipelineResponse from a dict
get_pipeline_response_from_dict = GetPipelineResponse.from_dict(get_pipeline_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


