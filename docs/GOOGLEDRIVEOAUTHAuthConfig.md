# GOOGLEDRIVEOAUTHAuthConfig

Authentication configuration for Google Drive OAuth

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**authorized_user** | **str** | Authorized User | [optional] 
**selection_details** | **str** | Connect Google Drive to Vectorize. Example: Authorize | 
**edited_users** | **str** |  | [optional] 
**reconnect_users** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.googledriveoauth_auth_config import GOOGLEDRIVEOAUTHAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GOOGLEDRIVEOAUTHAuthConfig from a JSON string
googledriveoauth_auth_config_instance = GOOGLEDRIVEOAUTHAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GOOGLEDRIVEOAUTHAuthConfig.to_json())

# convert the object into a dict
googledriveoauth_auth_config_dict = googledriveoauth_auth_config_instance.to_dict()
# create an instance of GOOGLEDRIVEOAUTHAuthConfig from a dict
googledriveoauth_auth_config_from_dict = GOOGLEDRIVEOAUTHAuthConfig.from_dict(googledriveoauth_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


