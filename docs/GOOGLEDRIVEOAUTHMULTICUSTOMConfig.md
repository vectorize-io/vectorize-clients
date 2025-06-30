# GOOGLEDRIVEOAUTHMULTICUSTOMConfig

Configuration for Google Drive Multi-User (White Label) connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**idle_time** | **float** | Polling Interval (seconds). Example: Enter polling interval in seconds | [optional] [default to 5]

## Example

```python
from vectorize_client.models.googledriveoauthmulticustom_config import GOOGLEDRIVEOAUTHMULTICUSTOMConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GOOGLEDRIVEOAUTHMULTICUSTOMConfig from a JSON string
googledriveoauthmulticustom_config_instance = GOOGLEDRIVEOAUTHMULTICUSTOMConfig.from_json(json)
# print the JSON string representation of the object
print(GOOGLEDRIVEOAUTHMULTICUSTOMConfig.to_json())

# convert the object into a dict
googledriveoauthmulticustom_config_dict = googledriveoauthmulticustom_config_instance.to_dict()
# create an instance of GOOGLEDRIVEOAUTHMULTICUSTOMConfig from a dict
googledriveoauthmulticustom_config_from_dict = GOOGLEDRIVEOAUTHMULTICUSTOMConfig.from_dict(googledriveoauthmulticustom_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


