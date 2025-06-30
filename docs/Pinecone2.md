# Pinecone2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;PINECONE\&quot;) | 

## Example

```python
from vectorize_client.models.pinecone2 import Pinecone2

# TODO update the JSON string below
json = "{}"
# create an instance of Pinecone2 from a JSON string
pinecone2_instance = Pinecone2.from_json(json)
# print the JSON string representation of the object
print(Pinecone2.to_json())

# convert the object into a dict
pinecone2_dict = pinecone2_instance.to_dict()
# create an instance of Pinecone2 from a dict
pinecone2_from_dict = Pinecone2.from_dict(pinecone2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


