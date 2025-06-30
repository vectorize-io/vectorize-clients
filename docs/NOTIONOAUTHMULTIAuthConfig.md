# NOTIONOAUTHMULTIAuthConfig

Authentication configuration for Notion Multi-User (Vectorize)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**authorized_users** | **str** | Authorized Users. Users who have authorized access to their Notion content | [optional] 
**edited_users** | **str** |  | [optional] 
**deleted_users** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.notionoauthmulti_auth_config import NOTIONOAUTHMULTIAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NOTIONOAUTHMULTIAuthConfig from a JSON string
notionoauthmulti_auth_config_instance = NOTIONOAUTHMULTIAuthConfig.from_json(json)
# print the JSON string representation of the object
print(NOTIONOAUTHMULTIAuthConfig.to_json())

# convert the object into a dict
notionoauthmulti_auth_config_dict = notionoauthmulti_auth_config_instance.to_dict()
# create an instance of NOTIONOAUTHMULTIAuthConfig from a dict
notionoauthmulti_auth_config_from_dict = NOTIONOAUTHMULTIAuthConfig.from_dict(notionoauthmulti_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


