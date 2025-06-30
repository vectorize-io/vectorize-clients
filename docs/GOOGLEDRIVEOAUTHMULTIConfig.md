# GOOGLEDRIVEOAUTHMULTIConfig

Configuration for Google Drive Multi-User (Vectorize) connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**idle_time** | **float** | Polling Interval (seconds). Example: Enter polling interval in seconds | [optional] [default to 5]

## Example

```python
from vectorize_client.models.googledriveoauthmulti_config import GOOGLEDRIVEOAUTHMULTIConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GOOGLEDRIVEOAUTHMULTIConfig from a JSON string
googledriveoauthmulti_config_instance = GOOGLEDRIVEOAUTHMULTIConfig.from_json(json)
# print the JSON string representation of the object
print(GOOGLEDRIVEOAUTHMULTIConfig.to_json())

# convert the object into a dict
googledriveoauthmulti_config_dict = googledriveoauthmulti_config_instance.to_dict()
# create an instance of GOOGLEDRIVEOAUTHMULTIConfig from a dict
googledriveoauthmulti_config_from_dict = GOOGLEDRIVEOAUTHMULTIConfig.from_dict(googledriveoauthmulti_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


