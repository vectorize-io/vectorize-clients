# DropboxOauthMulti2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;DROPBOX_OAUTH_MULTI\&quot;) | 

## Example

```python
from vectorize_client.models.dropbox_oauth_multi2 import DropboxOauthMulti2

# TODO update the JSON string below
json = "{}"
# create an instance of DropboxOauthMulti2 from a JSON string
dropbox_oauth_multi2_instance = DropboxOauthMulti2.from_json(json)
# print the JSON string representation of the object
print(DropboxOauthMulti2.to_json())

# convert the object into a dict
dropbox_oauth_multi2_dict = dropbox_oauth_multi2_instance.to_dict()
# create an instance of DropboxOauthMulti2 from a dict
dropbox_oauth_multi2_from_dict = DropboxOauthMulti2.from_dict(dropbox_oauth_multi2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


