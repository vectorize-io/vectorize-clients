# SHAREPOINTConfig

Configuration for SharePoint connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**sites** | **str** | Site Name(s). Example: Filter by site name. All sites if empty. | [optional] 

## Example

```python
from vectorize_client.models.sharepoint_config import SHAREPOINTConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SHAREPOINTConfig from a JSON string
sharepoint_config_instance = SHAREPOINTConfig.from_json(json)
# print the JSON string representation of the object
print(SHAREPOINTConfig.to_json())

# convert the object into a dict
sharepoint_config_dict = sharepoint_config_instance.to_dict()
# create an instance of SHAREPOINTConfig from a dict
sharepoint_config_from_dict = SHAREPOINTConfig.from_dict(sharepoint_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


