# AWSS3Config

Configuration for Amazon S3 connector

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
from vectorize_client.models.awss3_config import AWSS3Config

# TODO update the JSON string below
json = "{}"
# create an instance of AWSS3Config from a JSON string
awss3_config_instance = AWSS3Config.from_json(json)
# print the JSON string representation of the object
print(AWSS3Config.to_json())

# convert the object into a dict
awss3_config_dict = awss3_config_instance.to_dict()
# create an instance of AWSS3Config from a dict
awss3_config_from_dict = AWSS3Config.from_dict(awss3_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


