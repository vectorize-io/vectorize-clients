# PipelineAIPlatformRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;BEDROCK\&quot;) | 

## Example

```python
from vectorize_client.models.pipeline_ai_platform_request_inner import PipelineAIPlatformRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineAIPlatformRequestInner from a JSON string
pipeline_ai_platform_request_inner_instance = PipelineAIPlatformRequestInner.from_json(json)
# print the JSON string representation of the object
print(PipelineAIPlatformRequestInner.to_json())

# convert the object into a dict
pipeline_ai_platform_request_inner_dict = pipeline_ai_platform_request_inner_instance.to_dict()
# create an instance of PipelineAIPlatformRequestInner from a dict
pipeline_ai_platform_request_inner_from_dict = PipelineAIPlatformRequestInner.from_dict(pipeline_ai_platform_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


