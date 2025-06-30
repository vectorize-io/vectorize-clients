# GOOGLEDRIVEAuthConfig

Authentication configuration for Google Drive (Service Account)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**service_account_json** | **str** | Service Account JSON. Example: Enter the JSON key file for the service account | 

## Example

```python
from vectorize_client.models.googledrive_auth_config import GOOGLEDRIVEAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GOOGLEDRIVEAuthConfig from a JSON string
googledrive_auth_config_instance = GOOGLEDRIVEAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GOOGLEDRIVEAuthConfig.to_json())

# convert the object into a dict
googledrive_auth_config_dict = googledrive_auth_config_instance.to_dict()
# create an instance of GOOGLEDRIVEAuthConfig from a dict
googledrive_auth_config_from_dict = GOOGLEDRIVEAuthConfig.from_dict(googledrive_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


