# DROPBOXConfig

Configuration for Dropbox (Legacy) connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_prefix** | **str** | Read from these folders (optional). Example: Enter Path: /exampleFolder/subFolder | [optional] 

## Example

```python
from vectorize_client.models.dropbox_config import DROPBOXConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DROPBOXConfig from a JSON string
dropbox_config_instance = DROPBOXConfig.from_json(json)
# print the JSON string representation of the object
print(DROPBOXConfig.to_json())

# convert the object into a dict
dropbox_config_dict = dropbox_config_instance.to_dict()
# create an instance of DROPBOXConfig from a dict
dropbox_config_from_dict = DROPBOXConfig.from_dict(dropbox_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


