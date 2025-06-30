# GOOGLEDRIVEOAUTHMULTIAuthConfig

Authentication configuration for Google Drive Multi-User (Vectorize)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**authorized_users** | **str** | Authorized Users | [optional] 
**edited_users** | **str** |  | [optional] 
**deleted_users** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.googledriveoauthmulti_auth_config import GOOGLEDRIVEOAUTHMULTIAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GOOGLEDRIVEOAUTHMULTIAuthConfig from a JSON string
googledriveoauthmulti_auth_config_instance = GOOGLEDRIVEOAUTHMULTIAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GOOGLEDRIVEOAUTHMULTIAuthConfig.to_json())

# convert the object into a dict
googledriveoauthmulti_auth_config_dict = googledriveoauthmulti_auth_config_instance.to_dict()
# create an instance of GOOGLEDRIVEOAUTHMULTIAuthConfig from a dict
googledriveoauthmulti_auth_config_from_dict = GOOGLEDRIVEOAUTHMULTIAuthConfig.from_dict(googledriveoauthmulti_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


