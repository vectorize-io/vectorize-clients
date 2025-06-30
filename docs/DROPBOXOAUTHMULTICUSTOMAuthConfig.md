# DROPBOXOAUTHMULTICUSTOMAuthConfig

Authentication configuration for Dropbox Multi-User (White Label)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**app_key** | **str** | Dropbox App Key. Example: Enter App Key | 
**app_secret** | **str** | Dropbox App Secret. Example: Enter App Secret | 
**authorized_users** | **str** | Authorized Users | [optional] 
**edited_users** | **str** |  | [optional] 
**deleted_users** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.dropboxoauthmulticustom_auth_config import DROPBOXOAUTHMULTICUSTOMAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DROPBOXOAUTHMULTICUSTOMAuthConfig from a JSON string
dropboxoauthmulticustom_auth_config_instance = DROPBOXOAUTHMULTICUSTOMAuthConfig.from_json(json)
# print the JSON string representation of the object
print(DROPBOXOAUTHMULTICUSTOMAuthConfig.to_json())

# convert the object into a dict
dropboxoauthmulticustom_auth_config_dict = dropboxoauthmulticustom_auth_config_instance.to_dict()
# create an instance of DROPBOXOAUTHMULTICUSTOMAuthConfig from a dict
dropboxoauthmulticustom_auth_config_from_dict = DROPBOXOAUTHMULTICUSTOMAuthConfig.from_dict(dropboxoauthmulticustom_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


