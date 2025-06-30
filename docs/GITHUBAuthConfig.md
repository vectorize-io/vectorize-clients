# GITHUBAuthConfig

Authentication configuration for GitHub

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**oauth_token** | **str** | Personal Access Token. Example: Enter your GitHub personal access token | 

## Example

```python
from vectorize_client.models.github_auth_config import GITHUBAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GITHUBAuthConfig from a JSON string
github_auth_config_instance = GITHUBAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GITHUBAuthConfig.to_json())

# convert the object into a dict
github_auth_config_dict = github_auth_config_instance.to_dict()
# create an instance of GITHUBAuthConfig from a dict
github_auth_config_from_dict = GITHUBAuthConfig.from_dict(github_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


