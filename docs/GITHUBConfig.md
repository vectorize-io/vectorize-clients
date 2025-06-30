# GITHUBConfig

Configuration for GitHub connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repositories** | **str** | Repositories. Example: Example: owner1/repo1 | 
**include_pull_requests** | **bool** | Include Pull Requests | [default to True]
**pull_request_status** | **str** | Pull Request Status | [default to 'all']
**pull_request_labels** | **str** | Pull Request Labels. Example: Optionally filter by label. E.g. fix | [optional] 
**include_issues** | **bool** | Include Issues | [default to True]
**issue_status** | **str** | Issue Status | [default to 'all']
**issue_labels** | **str** | Issue Labels. Example: Optionally filter by label. E.g. bug | [optional] 
**max_items** | **float** | Max Items. Example: Enter maximum number of items to fetch | [default to 1000]
**created_after** | **date** | Created After. Filter for items created after this date. Example: Enter a date: Example 2012-12-31 | [optional] 

## Example

```python
from vectorize_client.models.github_config import GITHUBConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GITHUBConfig from a JSON string
github_config_instance = GITHUBConfig.from_json(json)
# print the JSON string representation of the object
print(GITHUBConfig.to_json())

# convert the object into a dict
github_config_dict = github_config_instance.to_dict()
# create an instance of GITHUBConfig from a dict
github_config_from_dict = GITHUBConfig.from_dict(github_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


