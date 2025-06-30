# DropboxOauth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;DROPBOX_OAUTH\&quot;) | 
**config** | [**DROPBOXOAUTHAuthConfig**](DROPBOXOAUTHAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.dropbox_oauth import DropboxOauth

# TODO update the JSON string below
json = "{}"
# create an instance of DropboxOauth from a JSON string
dropbox_oauth_instance = DropboxOauth.from_json(json)
# print the JSON string representation of the object
print(DropboxOauth.to_json())

# convert the object into a dict
dropbox_oauth_dict = dropbox_oauth_instance.to_dict()
# create an instance of DropboxOauth from a dict
dropbox_oauth_from_dict = DropboxOauth.from_dict(dropbox_oauth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


