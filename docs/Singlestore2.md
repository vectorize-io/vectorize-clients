# Singlestore2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;SINGLESTORE\&quot;) | 

## Example

```python
from vectorize_client.models.singlestore2 import Singlestore2

# TODO update the JSON string below
json = "{}"
# create an instance of Singlestore2 from a JSON string
singlestore2_instance = Singlestore2.from_json(json)
# print the JSON string representation of the object
print(Singlestore2.to_json())

# convert the object into a dict
singlestore2_dict = singlestore2_instance.to_dict()
# create an instance of Singlestore2 from a dict
singlestore2_from_dict = Singlestore2.from_dict(singlestore2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


