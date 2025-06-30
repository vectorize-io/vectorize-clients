# NotionOauthMultiCustom


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;NOTION_OAUTH_MULTI_CUSTOM\&quot;) | 
**config** | [**NOTIONOAUTHMULTICUSTOMAuthConfig**](NOTIONOAUTHMULTICUSTOMAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.notion_oauth_multi_custom import NotionOauthMultiCustom

# TODO update the JSON string below
json = "{}"
# create an instance of NotionOauthMultiCustom from a JSON string
notion_oauth_multi_custom_instance = NotionOauthMultiCustom.from_json(json)
# print the JSON string representation of the object
print(NotionOauthMultiCustom.to_json())

# convert the object into a dict
notion_oauth_multi_custom_dict = notion_oauth_multi_custom_instance.to_dict()
# create an instance of NotionOauthMultiCustom from a dict
notion_oauth_multi_custom_from_dict = NotionOauthMultiCustom.from_dict(notion_oauth_multi_custom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


