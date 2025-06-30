# PipelineEvents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**timestamp** | **str** |  | 
**details** | **Dict[str, Optional[object]]** |  | [optional] 
**summary** | **Dict[str, Optional[object]]** |  | [optional] 

## Example

```python
from vectorize_client.models.pipeline_events import PipelineEvents

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineEvents from a JSON string
pipeline_events_instance = PipelineEvents.from_json(json)
# print the JSON string representation of the object
print(PipelineEvents.to_json())

# convert the object into a dict
pipeline_events_dict = pipeline_events_instance.to_dict()
# create an instance of PipelineEvents from a dict
pipeline_events_from_dict = PipelineEvents.from_dict(pipeline_events_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


