# StartFileUploadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**content_type** | **str** |  | 

## Example

```python
from vectorize_client.models.start_file_upload_request import StartFileUploadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartFileUploadRequest from a JSON string
start_file_upload_request_instance = StartFileUploadRequest.from_json(json)
# print the JSON string representation of the object
print(StartFileUploadRequest.to_json())

# convert the object into a dict
start_file_upload_request_dict = start_file_upload_request_instance.to_dict()
# create an instance of StartFileUploadRequest from a dict
start_file_upload_request_from_dict = StartFileUploadRequest.from_dict(start_file_upload_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


