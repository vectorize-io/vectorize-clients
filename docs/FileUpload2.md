# FileUpload2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;FILE_UPLOAD\&quot;) | 

## Example

```python
from vectorize_client.models.file_upload2 import FileUpload2

# TODO update the JSON string below
json = "{}"
# create an instance of FileUpload2 from a JSON string
file_upload2_instance = FileUpload2.from_json(json)
# print the JSON string representation of the object
print(FileUpload2.to_json())

# convert the object into a dict
file_upload2_dict = file_upload2_instance.to_dict()
# create an instance of FileUpload2 from a dict
file_upload2_from_dict = FileUpload2.from_dict(file_upload2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


