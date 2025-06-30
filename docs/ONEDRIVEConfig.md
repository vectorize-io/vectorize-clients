# ONEDRIVEConfig

Configuration for OneDrive connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**path_prefix** | **str** | Read starting from this folder (optional). Example: Enter Folder path: /exampleFolder/subFolder | [optional] 

## Example

```python
from vectorize_client.models.onedrive_config import ONEDRIVEConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ONEDRIVEConfig from a JSON string
onedrive_config_instance = ONEDRIVEConfig.from_json(json)
# print the JSON string representation of the object
print(ONEDRIVEConfig.to_json())

# convert the object into a dict
onedrive_config_dict = onedrive_config_instance.to_dict()
# create an instance of ONEDRIVEConfig from a dict
onedrive_config_from_dict = ONEDRIVEConfig.from_dict(onedrive_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


