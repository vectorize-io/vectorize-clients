# AZUREBLOBConfig

Configuration for Azure Blob Storage connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**idle_time** | **float** | Polling Interval (seconds) | [default to 5]
**recursive** | **bool** | Recursively scan all folders in the bucket | [optional] 
**path_prefix** | **str** | Path Prefix | [optional] 
**path_metadata_regex** | **str** | Path Metadata Regex | [optional] 
**path_regex_group_names** | **str** | Path Regex Group Names. Example: Enter Group Name | [optional] 

## Example

```python
from vectorize_client.models.azureblob_config import AZUREBLOBConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AZUREBLOBConfig from a JSON string
azureblob_config_instance = AZUREBLOBConfig.from_json(json)
# print the JSON string representation of the object
print(AZUREBLOBConfig.to_json())

# convert the object into a dict
azureblob_config_dict = azureblob_config_instance.to_dict()
# create an instance of AZUREBLOBConfig from a dict
azureblob_config_from_dict = AZUREBLOBConfig.from_dict(azureblob_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


