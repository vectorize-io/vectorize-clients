# Github


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;GITHUB\&quot;) | 
**config** | [**GITHUBConfig**](GITHUBConfig.md) |  | 

## Example

```python
from vectorize_client.models.github import Github

# TODO update the JSON string below
json = "{}"
# create an instance of Github from a JSON string
github_instance = Github.from_json(json)
# print the JSON string representation of the object
print(Github.to_json())

# convert the object into a dict
github_dict = github_instance.to_dict()
# create an instance of Github from a dict
github_from_dict = Github.from_dict(github_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


