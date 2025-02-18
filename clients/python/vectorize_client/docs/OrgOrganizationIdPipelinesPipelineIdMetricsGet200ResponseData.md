# OrgOrganizationIdPipelinesPipelineIdMetricsGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_count** | **float** |  | [optional] 
**vector_count** | **float** |  | [optional] 
**last_updated** | **datetime** |  | [optional] 

## Example

```python
from vectorize_client.models.org_organization_id_pipelines_pipeline_id_metrics_get200_response_data import OrgOrganizationIdPipelinesPipelineIdMetricsGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrganizationIdPipelinesPipelineIdMetricsGet200ResponseData from a JSON string
org_organization_id_pipelines_pipeline_id_metrics_get200_response_data_instance = OrgOrganizationIdPipelinesPipelineIdMetricsGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(OrgOrganizationIdPipelinesPipelineIdMetricsGet200ResponseData.to_json())

# convert the object into a dict
org_organization_id_pipelines_pipeline_id_metrics_get200_response_data_dict = org_organization_id_pipelines_pipeline_id_metrics_get200_response_data_instance.to_dict()
# create an instance of OrgOrganizationIdPipelinesPipelineIdMetricsGet200ResponseData from a dict
org_organization_id_pipelines_pipeline_id_metrics_get200_response_data_from_dict = OrgOrganizationIdPipelinesPipelineIdMetricsGet200ResponseData.from_dict(org_organization_id_pipelines_pipeline_id_metrics_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


