# DropboxOauthMultiCustom


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;DROPBOX_OAUTH_MULTI_CUSTOM\&quot;) | 
**config** | [**DROPBOXOAUTHMULTICUSTOMAuthConfig**](DROPBOXOAUTHMULTICUSTOMAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.dropbox_oauth_multi_custom import DropboxOauthMultiCustom

# TODO update the JSON string below
json = "{}"
# create an instance of DropboxOauthMultiCustom from a JSON string
dropbox_oauth_multi_custom_instance = DropboxOauthMultiCustom.from_json(json)
# print the JSON string representation of the object
print(DropboxOauthMultiCustom.to_json())

# convert the object into a dict
dropbox_oauth_multi_custom_dict = dropbox_oauth_multi_custom_instance.to_dict()
# create an instance of DropboxOauthMultiCustom from a dict
dropbox_oauth_multi_custom_from_dict = DropboxOauthMultiCustom.from_dict(dropbox_oauth_multi_custom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


