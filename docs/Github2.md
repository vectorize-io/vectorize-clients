# Github2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;GITHUB\&quot;) | 

## Example

```python
from vectorize_client.models.github2 import Github2

# TODO update the JSON string below
json = "{}"
# create an instance of Github2 from a JSON string
github2_instance = Github2.from_json(json)
# print the JSON string representation of the object
print(Github2.to_json())

# convert the object into a dict
github2_dict = github2_instance.to_dict()
# create an instance of Github2 from a dict
github2_from_dict = Github2.from_dict(github2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


