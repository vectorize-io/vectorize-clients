# OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseDataItemsInner]**](OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseDataItemsInner.md) |  | [optional] 
**next_token** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.org_organization_id_pipelines_pipeline_id_events_get200_response_data import OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseData from a JSON string
org_organization_id_pipelines_pipeline_id_events_get200_response_data_instance = OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseData.to_json())

# convert the object into a dict
org_organization_id_pipelines_pipeline_id_events_get200_response_data_dict = org_organization_id_pipelines_pipeline_id_events_get200_response_data_instance.to_dict()
# create an instance of OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseData from a dict
org_organization_id_pipelines_pipeline_id_events_get200_response_data_from_dict = OrgOrganizationIdPipelinesPipelineIdEventsGet200ResponseData.from_dict(org_organization_id_pipelines_pipeline_id_events_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


