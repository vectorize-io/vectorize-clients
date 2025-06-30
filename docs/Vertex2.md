# Vertex2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;VERTEX\&quot;) | 

## Example

```python
from vectorize_client.models.vertex2 import Vertex2

# TODO update the JSON string below
json = "{}"
# create an instance of Vertex2 from a JSON string
vertex2_instance = Vertex2.from_json(json)
# print the JSON string representation of the object
print(Vertex2.to_json())

# convert the object into a dict
vertex2_dict = vertex2_instance.to_dict()
# create an instance of Vertex2 from a dict
vertex2_from_dict = Vertex2.from_dict(vertex2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


