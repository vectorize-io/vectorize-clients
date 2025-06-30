# PINECONEAuthConfig

Authentication configuration for Pinecone

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Pinecone integration | 
**api_key** | **str** | API Key. Example: Enter your API Key | 

## Example

```python
from vectorize_client.models.pinecone_auth_config import PINECONEAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PINECONEAuthConfig from a JSON string
pinecone_auth_config_instance = PINECONEAuthConfig.from_json(json)
# print the JSON string representation of the object
print(PINECONEAuthConfig.to_json())

# convert the object into a dict
pinecone_auth_config_dict = pinecone_auth_config_instance.to_dict()
# create an instance of PINECONEAuthConfig from a dict
pinecone_auth_config_from_dict = PINECONEAuthConfig.from_dict(pinecone_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


