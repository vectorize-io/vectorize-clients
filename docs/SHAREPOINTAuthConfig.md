# SHAREPOINTAuthConfig

Authentication configuration for SharePoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**ms_client_id** | **str** | Client Id. Example: Enter Client Id | 
**ms_tenant_id** | **str** | Tenant Id. Example: Enter Tenant Id | 
**ms_client_secret** | **str** | Client Secret. Example: Enter Client Secret | 

## Example

```python
from vectorize_client.models.sharepoint_auth_config import SHAREPOINTAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SHAREPOINTAuthConfig from a JSON string
sharepoint_auth_config_instance = SHAREPOINTAuthConfig.from_json(json)
# print the JSON string representation of the object
print(SHAREPOINTAuthConfig.to_json())

# convert the object into a dict
sharepoint_auth_config_dict = sharepoint_auth_config_instance.to_dict()
# create an instance of SHAREPOINTAuthConfig from a dict
sharepoint_auth_config_from_dict = SHAREPOINTAuthConfig.from_dict(sharepoint_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


