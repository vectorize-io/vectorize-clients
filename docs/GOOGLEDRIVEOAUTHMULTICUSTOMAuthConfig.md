# GOOGLEDRIVEOAUTHMULTICUSTOMAuthConfig

Authentication configuration for Google Drive Multi-User (White Label)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**oauth2_client_id** | **str** | OAuth2 Client Id. Example: Enter Client Id | 
**oauth2_client_secret** | **str** | OAuth2 Client Secret. Example: Enter Client Secret | 
**authorized_users** | **str** | Authorized Users | [optional] 
**edited_users** | **str** |  | [optional] 
**deleted_users** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.googledriveoauthmulticustom_auth_config import GOOGLEDRIVEOAUTHMULTICUSTOMAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GOOGLEDRIVEOAUTHMULTICUSTOMAuthConfig from a JSON string
googledriveoauthmulticustom_auth_config_instance = GOOGLEDRIVEOAUTHMULTICUSTOMAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GOOGLEDRIVEOAUTHMULTICUSTOMAuthConfig.to_json())

# convert the object into a dict
googledriveoauthmulticustom_auth_config_dict = googledriveoauthmulticustom_auth_config_instance.to_dict()
# create an instance of GOOGLEDRIVEOAUTHMULTICUSTOMAuthConfig from a dict
googledriveoauthmulticustom_auth_config_from_dict = GOOGLEDRIVEOAUTHMULTICUSTOMAuthConfig.from_dict(googledriveoauthmulticustom_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


