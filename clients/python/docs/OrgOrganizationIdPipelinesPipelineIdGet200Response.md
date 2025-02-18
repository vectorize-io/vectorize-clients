# OrgOrganizationIdPipelinesPipelineIdGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**source_connectors** | **List[object]** |  | [optional] 
**destination_connector** | **object** |  | [optional] 
**ai_platform** | **object** |  | [optional] 

## Example

```python
from vectorize_client.models.org_organization_id_pipelines_pipeline_id_get200_response import OrgOrganizationIdPipelinesPipelineIdGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrganizationIdPipelinesPipelineIdGet200Response from a JSON string
org_organization_id_pipelines_pipeline_id_get200_response_instance = OrgOrganizationIdPipelinesPipelineIdGet200Response.from_json(json)
# print the JSON string representation of the object
print(OrgOrganizationIdPipelinesPipelineIdGet200Response.to_json())

# convert the object into a dict
org_organization_id_pipelines_pipeline_id_get200_response_dict = org_organization_id_pipelines_pipeline_id_get200_response_instance.to_dict()
# create an instance of OrgOrganizationIdPipelinesPipelineIdGet200Response from a dict
org_organization_id_pipelines_pipeline_id_get200_response_from_dict = OrgOrganizationIdPipelinesPipelineIdGet200Response.from_dict(org_organization_id_pipelines_pipeline_id_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


