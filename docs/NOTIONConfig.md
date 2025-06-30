# NOTIONConfig

Configuration for Notion connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**select_resources** | **str** | Select Notion Resources | 
**database_ids** | **str** | Database IDs | 
**database_names** | **str** | Database Names | 
**page_ids** | **str** | Page IDs | 
**page_names** | **str** | Page Names | 

## Example

```python
from vectorize_client.models.notion_config import NOTIONConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NOTIONConfig from a JSON string
notion_config_instance = NOTIONConfig.from_json(json)
# print the JSON string representation of the object
print(NOTIONConfig.to_json())

# convert the object into a dict
notion_config_dict = notion_config_instance.to_dict()
# create an instance of NOTIONConfig from a dict
notion_config_from_dict = NOTIONConfig.from_dict(notion_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


