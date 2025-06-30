# DropboxOauthMultiCustom2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;DROPBOX_OAUTH_MULTI_CUSTOM\&quot;) | 

## Example

```python
from vectorize_client.models.dropbox_oauth_multi_custom2 import DropboxOauthMultiCustom2

# TODO update the JSON string below
json = "{}"
# create an instance of DropboxOauthMultiCustom2 from a JSON string
dropbox_oauth_multi_custom2_instance = DropboxOauthMultiCustom2.from_json(json)
# print the JSON string representation of the object
print(DropboxOauthMultiCustom2.to_json())

# convert the object into a dict
dropbox_oauth_multi_custom2_dict = dropbox_oauth_multi_custom2_instance.to_dict()
# create an instance of DropboxOauthMultiCustom2 from a dict
dropbox_oauth_multi_custom2_from_dict = DropboxOauthMultiCustom2.from_dict(dropbox_oauth_multi_custom2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


