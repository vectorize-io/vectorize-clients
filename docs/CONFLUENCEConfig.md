# CONFLUENCEConfig

Configuration for Confluence connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spaces** | **str** | Spaces. Example: Spaces to include (name, key or id) | 
**root_parents** | **str** | Root Parents. Example: Enter root parent pages | [optional] 

## Example

```python
from vectorize_client.models.confluence_config import CONFLUENCEConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CONFLUENCEConfig from a JSON string
confluence_config_instance = CONFLUENCEConfig.from_json(json)
# print the JSON string representation of the object
print(CONFLUENCEConfig.to_json())

# convert the object into a dict
confluence_config_dict = confluence_config_instance.to_dict()
# create an instance of CONFLUENCEConfig from a dict
confluence_config_from_dict = CONFLUENCEConfig.from_dict(confluence_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


