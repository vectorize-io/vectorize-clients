# GoogleDrive


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;GOOGLE_DRIVE\&quot;) | 
**config** | [**GOOGLEDRIVEConfig**](GOOGLEDRIVEConfig.md) |  | 

## Example

```python
from vectorize_client.models.google_drive import GoogleDrive

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDrive from a JSON string
google_drive_instance = GoogleDrive.from_json(json)
# print the JSON string representation of the object
print(GoogleDrive.to_json())

# convert the object into a dict
google_drive_dict = google_drive_instance.to_dict()
# create an instance of GoogleDrive from a dict
google_drive_from_dict = GoogleDrive.from_dict(google_drive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


