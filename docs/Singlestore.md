# Singlestore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;SINGLESTORE\&quot;) | 
**config** | [**SINGLESTOREConfig**](SINGLESTOREConfig.md) |  | 

## Example

```python
from vectorize_client.models.singlestore import Singlestore

# TODO update the JSON string below
json = "{}"
# create an instance of Singlestore from a JSON string
singlestore_instance = Singlestore.from_json(json)
# print the JSON string representation of the object
print(Singlestore.to_json())

# convert the object into a dict
singlestore_dict = singlestore_instance.to_dict()
# create an instance of Singlestore from a dict
singlestore_from_dict = Singlestore.from_dict(singlestore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


