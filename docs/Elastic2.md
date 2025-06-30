# Elastic2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;ELASTIC\&quot;) | 

## Example

```python
from vectorize_client.models.elastic2 import Elastic2

# TODO update the JSON string below
json = "{}"
# create an instance of Elastic2 from a JSON string
elastic2_instance = Elastic2.from_json(json)
# print the JSON string representation of the object
print(Elastic2.to_json())

# convert the object into a dict
elastic2_dict = elastic2_instance.to_dict()
# create an instance of Elastic2 from a dict
elastic2_from_dict = Elastic2.from_dict(elastic2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


