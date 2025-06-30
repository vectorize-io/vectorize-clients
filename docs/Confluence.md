# Confluence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;CONFLUENCE\&quot;) | 
**config** | [**CONFLUENCEConfig**](CONFLUENCEConfig.md) |  | 

## Example

```python
from vectorize_client.models.confluence import Confluence

# TODO update the JSON string below
json = "{}"
# create an instance of Confluence from a JSON string
confluence_instance = Confluence.from_json(json)
# print the JSON string representation of the object
print(Confluence.to_json())

# convert the object into a dict
confluence_dict = confluence_instance.to_dict()
# create an instance of Confluence from a dict
confluence_from_dict = Confluence.from_dict(confluence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


