# FileUpload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;FILE_UPLOAD\&quot;) | 
**config** | [**FILEUPLOADAuthConfig**](FILEUPLOADAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.file_upload import FileUpload

# TODO update the JSON string below
json = "{}"
# create an instance of FileUpload from a JSON string
file_upload_instance = FileUpload.from_json(json)
# print the JSON string representation of the object
print(FileUpload.to_json())

# convert the object into a dict
file_upload_dict = file_upload_instance.to_dict()
# create an instance of FileUpload from a dict
file_upload_from_dict = FileUpload.from_dict(file_upload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


