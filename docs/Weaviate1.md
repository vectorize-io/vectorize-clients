# Weaviate1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**WEAVIATEConfig**](WEAVIATEConfig.md) |  | [optional] 

## Example

```python
from vectorize_client.models.weaviate1 import Weaviate1

# TODO update the JSON string below
json = "{}"
# create an instance of Weaviate1 from a JSON string
weaviate1_instance = Weaviate1.from_json(json)
# print the JSON string representation of the object
print(Weaviate1.to_json())

# convert the object into a dict
weaviate1_dict = weaviate1_instance.to_dict()
# create an instance of Weaviate1 from a dict
weaviate1_from_dict = Weaviate1.from_dict(weaviate1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


