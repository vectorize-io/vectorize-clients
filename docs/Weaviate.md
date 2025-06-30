# Weaviate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;WEAVIATE\&quot;) | 
**config** | [**WEAVIATEConfig**](WEAVIATEConfig.md) |  | 

## Example

```python
from vectorize_client.models.weaviate import Weaviate

# TODO update the JSON string below
json = "{}"
# create an instance of Weaviate from a JSON string
weaviate_instance = Weaviate.from_json(json)
# print the JSON string representation of the object
print(Weaviate.to_json())

# convert the object into a dict
weaviate_dict = weaviate_instance.to_dict()
# create an instance of Weaviate from a dict
weaviate_from_dict = Weaviate.from_dict(weaviate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


