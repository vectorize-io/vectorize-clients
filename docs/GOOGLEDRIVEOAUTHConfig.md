# GOOGLEDRIVEOAUTHConfig

Configuration for Google Drive OAuth connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**idle_time** | **float** | Polling Interval (seconds). Example: Enter polling interval in seconds | [optional] [default to 5]

## Example

```python
from vectorize_client.models.googledriveoauth_config import GOOGLEDRIVEOAUTHConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GOOGLEDRIVEOAUTHConfig from a JSON string
googledriveoauth_config_instance = GOOGLEDRIVEOAUTHConfig.from_json(json)
# print the JSON string representation of the object
print(GOOGLEDRIVEOAUTHConfig.to_json())

# convert the object into a dict
googledriveoauth_config_dict = googledriveoauth_config_instance.to_dict()
# create an instance of GOOGLEDRIVEOAUTHConfig from a dict
googledriveoauth_config_from_dict = GOOGLEDRIVEOAUTHConfig.from_dict(googledriveoauth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


