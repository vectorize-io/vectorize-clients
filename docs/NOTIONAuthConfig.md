# NOTIONAuthConfig

Authentication configuration for Notion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**access_token** | **str** | Connect Notion to Vectorize - Note this will effect existing connections. test. Example: Authorize | 
**s3id** | **str** |  | [optional] 
**edited_token** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.notion_auth_config import NOTIONAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NOTIONAuthConfig from a JSON string
notion_auth_config_instance = NOTIONAuthConfig.from_json(json)
# print the JSON string representation of the object
print(NOTIONAuthConfig.to_json())

# convert the object into a dict
notion_auth_config_dict = notion_auth_config_instance.to_dict()
# create an instance of NOTIONAuthConfig from a dict
notion_auth_config_from_dict = NOTIONAuthConfig.from_dict(notion_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


