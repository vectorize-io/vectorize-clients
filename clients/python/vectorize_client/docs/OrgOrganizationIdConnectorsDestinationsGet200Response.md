# OrgOrganizationIdConnectorsDestinationsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_connectors** | [**List[OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner]**](OrgOrganizationIdConnectorsAiplatformsGet200ResponseFormattedConnectorsInner.md) |  | [optional] 

## Example

```python
from vectorize_client.models.org_organization_id_connectors_destinations_get200_response import OrgOrganizationIdConnectorsDestinationsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrganizationIdConnectorsDestinationsGet200Response from a JSON string
org_organization_id_connectors_destinations_get200_response_instance = OrgOrganizationIdConnectorsDestinationsGet200Response.from_json(json)
# print the JSON string representation of the object
print(OrgOrganizationIdConnectorsDestinationsGet200Response.to_json())

# convert the object into a dict
org_organization_id_connectors_destinations_get200_response_dict = org_organization_id_connectors_destinations_get200_response_instance.to_dict()
# create an instance of OrgOrganizationIdConnectorsDestinationsGet200Response from a dict
org_organization_id_connectors_destinations_get200_response_from_dict = OrgOrganizationIdConnectorsDestinationsGet200Response.from_dict(org_organization_id_connectors_destinations_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


