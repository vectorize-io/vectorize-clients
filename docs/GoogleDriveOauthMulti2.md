# GoogleDriveOauthMulti2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;GOOGLE_DRIVE_OAUTH_MULTI\&quot;) | 

## Example

```python
from vectorize_client.models.google_drive_oauth_multi2 import GoogleDriveOauthMulti2

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDriveOauthMulti2 from a JSON string
google_drive_oauth_multi2_instance = GoogleDriveOauthMulti2.from_json(json)
# print the JSON string representation of the object
print(GoogleDriveOauthMulti2.to_json())

# convert the object into a dict
google_drive_oauth_multi2_dict = google_drive_oauth_multi2_instance.to_dict()
# create an instance of GoogleDriveOauthMulti2 from a dict
google_drive_oauth_multi2_from_dict = GoogleDriveOauthMulti2.from_dict(google_drive_oauth_multi2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


