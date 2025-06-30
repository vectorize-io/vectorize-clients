# GetUploadFilesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**files** | [**List[UploadFile]**](UploadFile.md) |  | 

## Example

```python
from vectorize_client.models.get_upload_files_response import GetUploadFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetUploadFilesResponse from a JSON string
get_upload_files_response_instance = GetUploadFilesResponse.from_json(json)
# print the JSON string representation of the object
print(GetUploadFilesResponse.to_json())

# convert the object into a dict
get_upload_files_response_dict = get_upload_files_response_instance.to_dict()
# create an instance of GetUploadFilesResponse from a dict
get_upload_files_response_from_dict = GetUploadFilesResponse.from_dict(get_upload_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


