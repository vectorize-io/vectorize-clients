# CONFLUENCEAuthConfig

Authentication configuration for Confluence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**username** | **str** | Username. Example: Enter your Confluence username | 
**api_token** | **str** | API Token. Example: Enter your Confluence API token | 
**domain** | **str** | Domain. Example: Enter your Confluence domain (e.g. my-domain.atlassian.net or confluence.&lt;my-company&gt;.com) | 

## Example

```python
from vectorize_client.models.confluence_auth_config import CONFLUENCEAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CONFLUENCEAuthConfig from a JSON string
confluence_auth_config_instance = CONFLUENCEAuthConfig.from_json(json)
# print the JSON string representation of the object
print(CONFLUENCEAuthConfig.to_json())

# convert the object into a dict
confluence_auth_config_dict = confluence_auth_config_instance.to_dict()
# create an instance of CONFLUENCEAuthConfig from a dict
confluence_auth_config_from_dict = CONFLUENCEAuthConfig.from_dict(confluence_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


