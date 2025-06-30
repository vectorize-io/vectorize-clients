# GoogleDriveOAuth2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;GOOGLE_DRIVE_OAUTH\&quot;) | 

## Example

```python
from vectorize_client.models.google_drive_o_auth2 import GoogleDriveOAuth2

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDriveOAuth2 from a JSON string
google_drive_o_auth2_instance = GoogleDriveOAuth2.from_json(json)
# print the JSON string representation of the object
print(GoogleDriveOAuth2.to_json())

# convert the object into a dict
google_drive_o_auth2_dict = google_drive_o_auth2_instance.to_dict()
# create an instance of GoogleDriveOAuth2 from a dict
google_drive_o_auth2_from_dict = GoogleDriveOAuth2.from_dict(google_drive_o_auth2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


