# OrgOrganizationIdConnectorsDestinationsPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**connectors** | [**List[OrgOrganizationIdConnectorsDestinationsPost200ResponseConnectorsInner]**](OrgOrganizationIdConnectorsDestinationsPost200ResponseConnectorsInner.md) |  | [optional] 

## Example

```python
from vectorize_client.models.org_organization_id_connectors_destinations_post200_response import OrgOrganizationIdConnectorsDestinationsPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrganizationIdConnectorsDestinationsPost200Response from a JSON string
org_organization_id_connectors_destinations_post200_response_instance = OrgOrganizationIdConnectorsDestinationsPost200Response.from_json(json)
# print the JSON string representation of the object
print(OrgOrganizationIdConnectorsDestinationsPost200Response.to_json())

# convert the object into a dict
org_organization_id_connectors_destinations_post200_response_dict = org_organization_id_connectors_destinations_post200_response_instance.to_dict()
# create an instance of OrgOrganizationIdConnectorsDestinationsPost200Response from a dict
org_organization_id_connectors_destinations_post200_response_from_dict = OrgOrganizationIdConnectorsDestinationsPost200Response.from_dict(org_organization_id_connectors_destinations_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


