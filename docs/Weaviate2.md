# Weaviate2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;WEAVIATE\&quot;) | 

## Example

```python
from vectorize_client.models.weaviate2 import Weaviate2

# TODO update the JSON string below
json = "{}"
# create an instance of Weaviate2 from a JSON string
weaviate2_instance = Weaviate2.from_json(json)
# print the JSON string representation of the object
print(Weaviate2.to_json())

# convert the object into a dict
weaviate2_dict = weaviate2_instance.to_dict()
# create an instance of Weaviate2 from a dict
weaviate2_from_dict = Weaviate2.from_dict(weaviate2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


