# Notion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;NOTION\&quot;) | 
**config** | [**NOTIONConfig**](NOTIONConfig.md) |  | 

## Example

```python
from vectorize_client.models.notion import Notion

# TODO update the JSON string below
json = "{}"
# create an instance of Notion from a JSON string
notion_instance = Notion.from_json(json)
# print the JSON string representation of the object
print(Notion.to_json())

# convert the object into a dict
notion_dict = notion_instance.to_dict()
# create an instance of Notion from a dict
notion_from_dict = Notion.from_dict(notion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


