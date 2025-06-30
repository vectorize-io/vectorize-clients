# ONEDRIVEAuthConfig

Authentication configuration for OneDrive

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**ms_client_id** | **str** | Client Id. Example: Enter Client Id | 
**ms_tenant_id** | **str** | Tenant Id. Example: Enter Tenant Id | 
**ms_client_secret** | **str** | Client Secret. Example: Enter Client Secret | 
**users** | **str** | Users. Example: Enter users emails to import files from. Example: developer@vectorize.io | 

## Example

```python
from vectorize_client.models.onedrive_auth_config import ONEDRIVEAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ONEDRIVEAuthConfig from a JSON string
onedrive_auth_config_instance = ONEDRIVEAuthConfig.from_json(json)
# print the JSON string representation of the object
print(ONEDRIVEAuthConfig.to_json())

# convert the object into a dict
onedrive_auth_config_dict = onedrive_auth_config_instance.to_dict()
# create an instance of ONEDRIVEAuthConfig from a dict
onedrive_auth_config_from_dict = ONEDRIVEAuthConfig.from_dict(onedrive_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


