# DROPBOXOAUTHMULTIAuthConfig

Authentication configuration for Dropbox Multi-User (Vectorize)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**authorized_users** | **str** | Authorized Users | [optional] 
**edited_users** | **str** |  | [optional] 
**deleted_users** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.dropboxoauthmulti_auth_config import DROPBOXOAUTHMULTIAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DROPBOXOAUTHMULTIAuthConfig from a JSON string
dropboxoauthmulti_auth_config_instance = DROPBOXOAUTHMULTIAuthConfig.from_json(json)
# print the JSON string representation of the object
print(DROPBOXOAUTHMULTIAuthConfig.to_json())

# convert the object into a dict
dropboxoauthmulti_auth_config_dict = dropboxoauthmulti_auth_config_instance.to_dict()
# create an instance of DROPBOXOAUTHMULTIAuthConfig from a dict
dropboxoauthmulti_auth_config_from_dict = DROPBOXOAUTHMULTIAuthConfig.from_dict(dropboxoauthmulti_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


