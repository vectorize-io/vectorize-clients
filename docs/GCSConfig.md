# GCSConfig

Configuration for GCP Cloud Storage connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**idle_time** | **float** | Check for updates every (seconds) | [default to 5]
**recursive** | **bool** | Recursively scan all folders in the bucket | [optional] 
**path_prefix** | **str** | Path Prefix | [optional] 
**path_metadata_regex** | **str** | Path Metadata Regex | [optional] 
**path_regex_group_names** | **str** | Path Regex Group Names. Example: Enter Group Name | [optional] 

## Example

```python
from vectorize_client.models.gcs_config import GCSConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GCSConfig from a JSON string
gcs_config_instance = GCSConfig.from_json(json)
# print the JSON string representation of the object
print(GCSConfig.to_json())

# convert the object into a dict
gcs_config_dict = gcs_config_instance.to_dict()
# create an instance of GCSConfig from a dict
gcs_config_from_dict = GCSConfig.from_dict(gcs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


