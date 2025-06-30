# Dropbox2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;DROPBOX\&quot;) | 

## Example

```python
from vectorize_client.models.dropbox2 import Dropbox2

# TODO update the JSON string below
json = "{}"
# create an instance of Dropbox2 from a JSON string
dropbox2_instance = Dropbox2.from_json(json)
# print the JSON string representation of the object
print(Dropbox2.to_json())

# convert the object into a dict
dropbox2_dict = dropbox2_instance.to_dict()
# create an instance of Dropbox2 from a dict
dropbox2_from_dict = Dropbox2.from_dict(dropbox2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


