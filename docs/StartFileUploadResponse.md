# StartFileUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** |  | 
**upload_url** | **str** |  | 

## Example

```python
from vectorize_client.models.start_file_upload_response import StartFileUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StartFileUploadResponse from a JSON string
start_file_upload_response_instance = StartFileUploadResponse.from_json(json)
# print the JSON string representation of the object
print(StartFileUploadResponse.to_json())

# convert the object into a dict
start_file_upload_response_dict = start_file_upload_response_instance.to_dict()
# create an instance of StartFileUploadResponse from a dict
start_file_upload_response_from_dict = StartFileUploadResponse.from_dict(start_file_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


