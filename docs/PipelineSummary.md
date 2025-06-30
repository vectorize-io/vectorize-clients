# PipelineSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**document_count** | **float** |  | 
**source_connector_auth_ids** | **List[str]** |  | 
**destination_connector_auth_ids** | **List[str]** |  | 
**ai_platform_auth_ids** | **List[str]** |  | 
**source_connector_types** | **List[str]** |  | 
**destination_connector_types** | **List[str]** |  | 
**ai_platform_types** | **List[str]** |  | 
**created_at** | **str** |  | 
**created_by** | **str** |  | 
**status** | **str** |  | [optional] 
**config_doc** | **Dict[str, Optional[object]]** |  | [optional] 
**source_connectors** | [**List[SourceConnector]**](SourceConnector.md) |  | 
**destination_connectors** | [**List[DestinationConnector]**](DestinationConnector.md) |  | 
**ai_platforms** | [**List[AIPlatform]**](AIPlatform.md) |  | 

## Example

```python
from vectorize_client.models.pipeline_summary import PipelineSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineSummary from a JSON string
pipeline_summary_instance = PipelineSummary.from_json(json)
# print the JSON string representation of the object
print(PipelineSummary.to_json())

# convert the object into a dict
pipeline_summary_dict = pipeline_summary_instance.to_dict()
# create an instance of PipelineSummary from a dict
pipeline_summary_from_dict = PipelineSummary.from_dict(pipeline_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


