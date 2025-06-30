# Datastax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;DATASTAX\&quot;) | 
**config** | [**DATASTAXConfig**](DATASTAXConfig.md) |  | 

## Example

```python
from vectorize_client.models.datastax import Datastax

# TODO update the JSON string below
json = "{}"
# create an instance of Datastax from a JSON string
datastax_instance = Datastax.from_json(json)
# print the JSON string representation of the object
print(Datastax.to_json())

# convert the object into a dict
datastax_dict = datastax_instance.to_dict()
# create an instance of Datastax from a dict
datastax_from_dict = Datastax.from_dict(datastax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


