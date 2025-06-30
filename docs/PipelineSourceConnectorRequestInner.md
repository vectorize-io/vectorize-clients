# PipelineSourceConnectorRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;AWS_S3\&quot;) | 

## Example

```python
from vectorize_client.models.pipeline_source_connector_request_inner import PipelineSourceConnectorRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineSourceConnectorRequestInner from a JSON string
pipeline_source_connector_request_inner_instance = PipelineSourceConnectorRequestInner.from_json(json)
# print the JSON string representation of the object
print(PipelineSourceConnectorRequestInner.to_json())

# convert the object into a dict
pipeline_source_connector_request_inner_dict = pipeline_source_connector_request_inner_instance.to_dict()
# create an instance of PipelineSourceConnectorRequestInner from a dict
pipeline_source_connector_request_inner_from_dict = PipelineSourceConnectorRequestInner.from_dict(pipeline_source_connector_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


