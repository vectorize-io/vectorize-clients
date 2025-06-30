# FILEUPLOADAuthConfig

Authentication configuration for File Upload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for this connector | 
**path_prefix** | **str** | Path Prefix | [optional] 
**files** | **List[str]** | Choose files. Files uploaded to this connector can be used in pipelines to vectorize their contents. Note: files with the same name will be overwritten. | [optional] 

## Example

```python
from vectorize_client.models.fileupload_auth_config import FILEUPLOADAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FILEUPLOADAuthConfig from a JSON string
fileupload_auth_config_instance = FILEUPLOADAuthConfig.from_json(json)
# print the JSON string representation of the object
print(FILEUPLOADAuthConfig.to_json())

# convert the object into a dict
fileupload_auth_config_dict = fileupload_auth_config_instance.to_dict()
# create an instance of FILEUPLOADAuthConfig from a dict
fileupload_auth_config_from_dict = FILEUPLOADAuthConfig.from_dict(fileupload_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


