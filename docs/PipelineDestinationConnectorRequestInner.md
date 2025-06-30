# PipelineDestinationConnectorRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;CAPELLA\&quot;) | 

## Example

```python
from vectorize_client.models.pipeline_destination_connector_request_inner import PipelineDestinationConnectorRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineDestinationConnectorRequestInner from a JSON string
pipeline_destination_connector_request_inner_instance = PipelineDestinationConnectorRequestInner.from_json(json)
# print the JSON string representation of the object
print(PipelineDestinationConnectorRequestInner.to_json())

# convert the object into a dict
pipeline_destination_connector_request_inner_dict = pipeline_destination_connector_request_inner_instance.to_dict()
# create an instance of PipelineDestinationConnectorRequestInner from a dict
pipeline_destination_connector_request_inner_from_dict = PipelineDestinationConnectorRequestInner.from_dict(pipeline_destination_connector_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


