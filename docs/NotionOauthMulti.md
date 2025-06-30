# NotionOauthMulti


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;NOTION_OAUTH_MULTI\&quot;) | 
**config** | [**NOTIONOAUTHMULTIAuthConfig**](NOTIONOAUTHMULTIAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.notion_oauth_multi import NotionOauthMulti

# TODO update the JSON string below
json = "{}"
# create an instance of NotionOauthMulti from a JSON string
notion_oauth_multi_instance = NotionOauthMulti.from_json(json)
# print the JSON string representation of the object
print(NotionOauthMulti.to_json())

# convert the object into a dict
notion_oauth_multi_dict = notion_oauth_multi_instance.to_dict()
# create an instance of NotionOauthMulti from a dict
notion_oauth_multi_from_dict = NotionOauthMulti.from_dict(notion_oauth_multi_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


