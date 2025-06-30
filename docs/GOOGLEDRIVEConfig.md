# GOOGLEDRIVEConfig

Configuration for Google Drive (Service Account) connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**root_parents** | **str** | Restrict ingest to these folder URLs (optional). Example: Enter Folder URLs. Example: https://drive.google.com/drive/folders/1234aBCd5678_eFgH9012iJKL3456opqr | [optional] 
**idle_time** | **float** | Polling Interval (seconds). Example: Enter polling interval in seconds | [optional] [default to 5]

## Example

```python
from vectorize_client.models.googledrive_config import GOOGLEDRIVEConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GOOGLEDRIVEConfig from a JSON string
googledrive_config_instance = GOOGLEDRIVEConfig.from_json(json)
# print the JSON string representation of the object
print(GOOGLEDRIVEConfig.to_json())

# convert the object into a dict
googledrive_config_dict = googledrive_config_instance.to_dict()
# create an instance of GOOGLEDRIVEConfig from a dict
googledrive_config_from_dict = GOOGLEDRIVEConfig.from_dict(googledrive_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


