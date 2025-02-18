# OrgOrganizationIdPipelinesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from vectorize_client.models.org_organization_id_pipelines_post_request import OrgOrganizationIdPipelinesPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrgOrganizationIdPipelinesPostRequest from a JSON string
org_organization_id_pipelines_post_request_instance = OrgOrganizationIdPipelinesPostRequest.from_json(json)
# print the JSON string representation of the object
print(OrgOrganizationIdPipelinesPostRequest.to_json())

# convert the object into a dict
org_organization_id_pipelines_post_request_dict = org_organization_id_pipelines_post_request_instance.to_dict()
# create an instance of OrgOrganizationIdPipelinesPostRequest from a dict
org_organization_id_pipelines_post_request_from_dict = OrgOrganizationIdPipelinesPostRequest.from_dict(org_organization_id_pipelines_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


