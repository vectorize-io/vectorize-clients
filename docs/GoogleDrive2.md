# GoogleDrive2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;GOOGLE_DRIVE\&quot;) | 

## Example

```python
from vectorize_client.models.google_drive2 import GoogleDrive2

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDrive2 from a JSON string
google_drive2_instance = GoogleDrive2.from_json(json)
# print the JSON string representation of the object
print(GoogleDrive2.to_json())

# convert the object into a dict
google_drive2_dict = google_drive2_instance.to_dict()
# create an instance of GoogleDrive2 from a dict
google_drive2_from_dict = GoogleDrive2.from_dict(google_drive2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


