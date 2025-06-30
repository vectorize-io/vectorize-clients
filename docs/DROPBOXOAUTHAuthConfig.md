# DROPBOXOAUTHAuthConfig

Authentication configuration for Dropbox OAuth

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**authorized_user** | **str** | Authorized User | [optional] 
**selection_details** | **str** | Connect Dropbox to Vectorize. Example: Authorize | 
**edited_users** | **str** |  | [optional] 
**reconnect_users** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.dropboxoauth_auth_config import DROPBOXOAUTHAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DROPBOXOAUTHAuthConfig from a JSON string
dropboxoauth_auth_config_instance = DROPBOXOAUTHAuthConfig.from_json(json)
# print the JSON string representation of the object
print(DROPBOXOAUTHAuthConfig.to_json())

# convert the object into a dict
dropboxoauth_auth_config_dict = dropboxoauth_auth_config_instance.to_dict()
# create an instance of DROPBOXOAUTHAuthConfig from a dict
dropboxoauth_auth_config_from_dict = DROPBOXOAUTHAuthConfig.from_dict(dropboxoauth_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


