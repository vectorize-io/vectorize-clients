# OrgOrganizationIdPipelinesPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**data** | [**OrgOrganizationIdPipelinesPost200ResponseData**](OrgOrganizationIdPipelinesPost200ResponseData.md) |  | [optional] 

## Example

```python
from vectorize_client.models.org_organization_id_pipelines_post200_response import OrgOrganizationIdPipelinesPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrganizationIdPipelinesPost200Response from a JSON string
org_organization_id_pipelines_post200_response_instance = OrgOrganizationIdPipelinesPost200Response.from_json(json)
# print the JSON string representation of the object
print(OrgOrganizationIdPipelinesPost200Response.to_json())

# convert the object into a dict
org_organization_id_pipelines_post200_response_dict = org_organization_id_pipelines_post200_response_instance.to_dict()
# create an instance of OrgOrganizationIdPipelinesPost200Response from a dict
org_organization_id_pipelines_post200_response_from_dict = OrgOrganizationIdPipelinesPost200Response.from_dict(org_organization_id_pipelines_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


