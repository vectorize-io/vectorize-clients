# NotionOauthMultiCustom2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;NOTION_OAUTH_MULTI_CUSTOM\&quot;) | 

## Example

```python
from vectorize_client.models.notion_oauth_multi_custom2 import NotionOauthMultiCustom2

# TODO update the JSON string below
json = "{}"
# create an instance of NotionOauthMultiCustom2 from a JSON string
notion_oauth_multi_custom2_instance = NotionOauthMultiCustom2.from_json(json)
# print the JSON string representation of the object
print(NotionOauthMultiCustom2.to_json())

# convert the object into a dict
notion_oauth_multi_custom2_dict = notion_oauth_multi_custom2_instance.to_dict()
# create an instance of NotionOauthMultiCustom2 from a dict
notion_oauth_multi_custom2_from_dict = NotionOauthMultiCustom2.from_dict(notion_oauth_multi_custom2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


