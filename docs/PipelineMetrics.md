# PipelineMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **str** |  | 
**new_objects** | **float** |  | 
**changed_objects** | **float** |  | 
**deleted_objects** | **float** |  | 

## Example

```python
from vectorize_client.models.pipeline_metrics import PipelineMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineMetrics from a JSON string
pipeline_metrics_instance = PipelineMetrics.from_json(json)
# print the JSON string representation of the object
print(PipelineMetrics.to_json())

# convert the object into a dict
pipeline_metrics_dict = pipeline_metrics_instance.to_dict()
# create an instance of PipelineMetrics from a dict
pipeline_metrics_from_dict = PipelineMetrics.from_dict(pipeline_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


