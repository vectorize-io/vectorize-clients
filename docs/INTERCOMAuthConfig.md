# INTERCOMAuthConfig

Authentication configuration for Intercom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**token** | **str** | Access Token. Example: Authorize Intercom Access | 

## Example

```python
from vectorize_client.models.intercom_auth_config import INTERCOMAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of INTERCOMAuthConfig from a JSON string
intercom_auth_config_instance = INTERCOMAuthConfig.from_json(json)
# print the JSON string representation of the object
print(INTERCOMAuthConfig.to_json())

# convert the object into a dict
intercom_auth_config_dict = intercom_auth_config_instance.to_dict()
# create an instance of INTERCOMAuthConfig from a dict
intercom_auth_config_from_dict = INTERCOMAuthConfig.from_dict(intercom_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


