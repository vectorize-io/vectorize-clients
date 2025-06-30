# NotionOauthMulti2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;NOTION_OAUTH_MULTI\&quot;) | 

## Example

```python
from vectorize_client.models.notion_oauth_multi2 import NotionOauthMulti2

# TODO update the JSON string below
json = "{}"
# create an instance of NotionOauthMulti2 from a JSON string
notion_oauth_multi2_instance = NotionOauthMulti2.from_json(json)
# print the JSON string representation of the object
print(NotionOauthMulti2.to_json())

# convert the object into a dict
notion_oauth_multi2_dict = notion_oauth_multi2_instance.to_dict()
# create an instance of NotionOauthMulti2 from a dict
notion_oauth_multi2_from_dict = NotionOauthMulti2.from_dict(notion_oauth_multi2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


