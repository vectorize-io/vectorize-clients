# NOTIONOAUTHMULTICUSTOMAuthConfig

Authentication configuration for Notion Multi-User (White Label)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**client_id** | **str** | Notion Client ID. Example: Enter Client ID | 
**client_secret** | **str** | Notion Client Secret. Example: Enter Client Secret | 
**authorized_users** | **str** | Authorized Users | [optional] 
**edited_users** | **str** |  | [optional] 
**deleted_users** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.notionoauthmulticustom_auth_config import NOTIONOAUTHMULTICUSTOMAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NOTIONOAUTHMULTICUSTOMAuthConfig from a JSON string
notionoauthmulticustom_auth_config_instance = NOTIONOAUTHMULTICUSTOMAuthConfig.from_json(json)
# print the JSON string representation of the object
print(NOTIONOAUTHMULTICUSTOMAuthConfig.to_json())

# convert the object into a dict
notionoauthmulticustom_auth_config_dict = notionoauthmulticustom_auth_config_instance.to_dict()
# create an instance of NOTIONOAUTHMULTICUSTOMAuthConfig from a dict
notionoauthmulticustom_auth_config_from_dict = NOTIONOAUTHMULTICUSTOMAuthConfig.from_dict(notionoauthmulticustom_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


