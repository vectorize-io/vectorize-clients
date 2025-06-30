# Datastax2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;DATASTAX\&quot;) | 

## Example

```python
from vectorize_client.models.datastax2 import Datastax2

# TODO update the JSON string below
json = "{}"
# create an instance of Datastax2 from a JSON string
datastax2_instance = Datastax2.from_json(json)
# print the JSON string representation of the object
print(Datastax2.to_json())

# convert the object into a dict
datastax2_dict = datastax2_instance.to_dict()
# create an instance of Datastax2 from a dict
datastax2_from_dict = Datastax2.from_dict(datastax2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


