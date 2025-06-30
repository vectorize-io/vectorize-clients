# GoogleDriveOAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;GOOGLE_DRIVE_OAUTH\&quot;) | 
**config** | [**GOOGLEDRIVEOAUTHConfig**](GOOGLEDRIVEOAUTHConfig.md) |  | 

## Example

```python
from vectorize_client.models.google_drive_o_auth import GoogleDriveOAuth

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDriveOAuth from a JSON string
google_drive_o_auth_instance = GoogleDriveOAuth.from_json(json)
# print the JSON string representation of the object
print(GoogleDriveOAuth.to_json())

# convert the object into a dict
google_drive_o_auth_dict = google_drive_o_auth_instance.to_dict()
# create an instance of GoogleDriveOAuth from a dict
google_drive_o_auth_from_dict = GoogleDriveOAuth.from_dict(google_drive_o_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


