# DropboxOauthMulti


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;DROPBOX_OAUTH_MULTI\&quot;) | 
**config** | [**DROPBOXOAUTHMULTIAuthConfig**](DROPBOXOAUTHMULTIAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.dropbox_oauth_multi import DropboxOauthMulti

# TODO update the JSON string below
json = "{}"
# create an instance of DropboxOauthMulti from a JSON string
dropbox_oauth_multi_instance = DropboxOauthMulti.from_json(json)
# print the JSON string representation of the object
print(DropboxOauthMulti.to_json())

# convert the object into a dict
dropbox_oauth_multi_dict = dropbox_oauth_multi_instance.to_dict()
# create an instance of DropboxOauthMulti from a dict
dropbox_oauth_multi_from_dict = DropboxOauthMulti.from_dict(dropbox_oauth_multi_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


