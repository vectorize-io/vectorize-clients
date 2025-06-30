# Dropbox


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;DROPBOX\&quot;) | 
**config** | [**DROPBOXConfig**](DROPBOXConfig.md) |  | 

## Example

```python
from vectorize_client.models.dropbox import Dropbox

# TODO update the JSON string below
json = "{}"
# create an instance of Dropbox from a JSON string
dropbox_instance = Dropbox.from_json(json)
# print the JSON string representation of the object
print(Dropbox.to_json())

# convert the object into a dict
dropbox_dict = dropbox_instance.to_dict()
# create an instance of Dropbox from a dict
dropbox_from_dict = Dropbox.from_dict(dropbox_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


