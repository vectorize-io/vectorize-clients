# GoogleDriveOauthMultiCustom


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;GOOGLE_DRIVE_OAUTH_MULTI_CUSTOM\&quot;) | 
**config** | [**GOOGLEDRIVEOAUTHMULTICUSTOMConfig**](GOOGLEDRIVEOAUTHMULTICUSTOMConfig.md) |  | 

## Example

```python
from vectorize_client.models.google_drive_oauth_multi_custom import GoogleDriveOauthMultiCustom

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDriveOauthMultiCustom from a JSON string
google_drive_oauth_multi_custom_instance = GoogleDriveOauthMultiCustom.from_json(json)
# print the JSON string representation of the object
print(GoogleDriveOauthMultiCustom.to_json())

# convert the object into a dict
google_drive_oauth_multi_custom_dict = google_drive_oauth_multi_custom_instance.to_dict()
# create an instance of GoogleDriveOauthMultiCustom from a dict
google_drive_oauth_multi_custom_from_dict = GoogleDriveOauthMultiCustom.from_dict(google_drive_oauth_multi_custom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


