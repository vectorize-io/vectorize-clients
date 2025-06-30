# UploadFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | 
**name** | **str** |  | 
**size** | **float** |  | 
**extension** | **str** |  | [optional] 
**last_modified** | **str** |  | 
**metadata** | **Dict[str, str]** |  | 

## Example

```python
from vectorize_client.models.upload_file import UploadFile

# TODO update the JSON string below
json = "{}"
# create an instance of UploadFile from a JSON string
upload_file_instance = UploadFile.from_json(json)
# print the JSON string representation of the object
print(UploadFile.to_json())

# convert the object into a dict
upload_file_dict = upload_file_instance.to_dict()
# create an instance of UploadFile from a dict
upload_file_from_dict = UploadFile.from_dict(upload_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


