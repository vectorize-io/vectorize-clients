# Pinecone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;PINECONE\&quot;) | 
**config** | [**PINECONEConfig**](PINECONEConfig.md) |  | 

## Example

```python
from vectorize_client.models.pinecone import Pinecone

# TODO update the JSON string below
json = "{}"
# create an instance of Pinecone from a JSON string
pinecone_instance = Pinecone.from_json(json)
# print the JSON string representation of the object
print(Pinecone.to_json())

# convert the object into a dict
pinecone_dict = pinecone_instance.to_dict()
# create an instance of Pinecone from a dict
pinecone_from_dict = Pinecone.from_dict(pinecone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


