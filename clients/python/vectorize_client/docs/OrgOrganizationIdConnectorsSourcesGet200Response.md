# OrgOrganizationIdConnectorsSourcesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_connectors** | [**List[OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner]**](OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner.md) |  | [optional] 

## Example

```python
from vectorize_client.models.org_organization_id_connectors_sources_get200_response import OrgOrganizationIdConnectorsSourcesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrganizationIdConnectorsSourcesGet200Response from a JSON string
org_organization_id_connectors_sources_get200_response_instance = OrgOrganizationIdConnectorsSourcesGet200Response.from_json(json)
# print the JSON string representation of the object
print(OrgOrganizationIdConnectorsSourcesGet200Response.to_json())

# convert the object into a dict
org_organization_id_connectors_sources_get200_response_dict = org_organization_id_connectors_sources_get200_response_instance.to_dict()
# create an instance of OrgOrganizationIdConnectorsSourcesGet200Response from a dict
org_organization_id_connectors_sources_get200_response_from_dict = OrgOrganizationIdConnectorsSourcesGet200Response.from_dict(org_organization_id_connectors_sources_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


