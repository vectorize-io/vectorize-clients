# GetPipelineMetricsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**List[PipelineMetrics]**](PipelineMetrics.md) |  | 

## Example

```python
from vectorize_client.models.get_pipeline_metrics_response import GetPipelineMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPipelineMetricsResponse from a JSON string
get_pipeline_metrics_response_instance = GetPipelineMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(GetPipelineMetricsResponse.to_json())

# convert the object into a dict
get_pipeline_metrics_response_dict = get_pipeline_metrics_response_instance.to_dict()
# create an instance of GetPipelineMetricsResponse from a dict
get_pipeline_metrics_response_from_dict = GetPipelineMetricsResponse.from_dict(get_pipeline_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


