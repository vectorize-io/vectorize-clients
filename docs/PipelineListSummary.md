# PipelineListSummary


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

## Example

```python
from vectorize_client.models.pipeline_list_summary import PipelineListSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineListSummary from a JSON string
pipeline_list_summary_instance = PipelineListSummary.from_json(json)
# print the JSON string representation of the object
print(PipelineListSummary.to_json())

# convert the object into a dict
pipeline_list_summary_dict = pipeline_list_summary_instance.to_dict()
# create an instance of PipelineListSummary from a dict
pipeline_list_summary_from_dict = PipelineListSummary.from_dict(pipeline_list_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


