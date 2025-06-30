# DropboxOauth2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;DROPBOX_OAUTH\&quot;) | 

## Example

```python
from vectorize_client.models.dropbox_oauth2 import DropboxOauth2

# TODO update the JSON string below
json = "{}"
# create an instance of DropboxOauth2 from a JSON string
dropbox_oauth2_instance = DropboxOauth2.from_json(json)
# print the JSON string representation of the object
print(DropboxOauth2.to_json())

# convert the object into a dict
dropbox_oauth2_dict = dropbox_oauth2_instance.to_dict()
# create an instance of DropboxOauth2 from a dict
dropbox_oauth2_from_dict = DropboxOauth2.from_dict(dropbox_oauth2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


