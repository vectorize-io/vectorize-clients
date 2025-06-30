# DROPBOXAuthConfig

Authentication configuration for Dropbox (Legacy)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**refresh_token** | **str** | Connect Dropbox to Vectorize. Example: Authorize | 

## Example

```python
from vectorize_client.models.dropbox_auth_config import DROPBOXAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DROPBOXAuthConfig from a JSON string
dropbox_auth_config_instance = DROPBOXAuthConfig.from_json(json)
# print the JSON string representation of the object
print(DROPBOXAuthConfig.to_json())

# convert the object into a dict
dropbox_auth_config_dict = dropbox_auth_config_instance.to_dict()
# create an instance of DROPBOXAuthConfig from a dict
dropbox_auth_config_from_dict = DROPBOXAuthConfig.from_dict(dropbox_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


