# PINECONEConfig

Configuration for Pinecone connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **str** | Index Name. Example: Enter index name | 
**namespace** | **str** | Namespace. Example: Enter namespace | [optional] 

## Example

```python
from vectorize_client.models.pinecone_config import PINECONEConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PINECONEConfig from a JSON string
pinecone_config_instance = PINECONEConfig.from_json(json)
# print the JSON string representation of the object
print(PINECONEConfig.to_json())

# convert the object into a dict
pinecone_config_dict = pinecone_config_instance.to_dict()
# create an instance of PINECONEConfig from a dict
pinecone_config_from_dict = PINECONEConfig.from_dict(pinecone_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


