# GoogleDriveOauthMulti


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;GOOGLE_DRIVE_OAUTH_MULTI\&quot;) | 
**config** | [**GOOGLEDRIVEOAUTHMULTIConfig**](GOOGLEDRIVEOAUTHMULTIConfig.md) |  | 

## Example

```python
from vectorize_client.models.google_drive_oauth_multi import GoogleDriveOauthMulti

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDriveOauthMulti from a JSON string
google_drive_oauth_multi_instance = GoogleDriveOauthMulti.from_json(json)
# print the JSON string representation of the object
print(GoogleDriveOauthMulti.to_json())

# convert the object into a dict
google_drive_oauth_multi_dict = google_drive_oauth_multi_instance.to_dict()
# create an instance of GoogleDriveOauthMulti from a dict
google_drive_oauth_multi_from_dict = GoogleDriveOauthMulti.from_dict(google_drive_oauth_multi_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


