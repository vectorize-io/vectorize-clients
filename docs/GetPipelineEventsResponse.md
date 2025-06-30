# GetPipelineEventsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**next_token** | **str** |  | [optional] 
**data** | [**List[PipelineEvents]**](PipelineEvents.md) |  | 

## Example

```python
from vectorize_client.models.get_pipeline_events_response import GetPipelineEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPipelineEventsResponse from a JSON string
get_pipeline_events_response_instance = GetPipelineEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GetPipelineEventsResponse.to_json())

# convert the object into a dict
get_pipeline_events_response_dict = get_pipeline_events_response_instance.to_dict()
# create an instance of GetPipelineEventsResponse from a dict
get_pipeline_events_response_from_dict = GetPipelineEventsResponse.from_dict(get_pipeline_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


