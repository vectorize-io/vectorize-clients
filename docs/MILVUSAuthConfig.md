# MILVUSAuthConfig

Authentication configuration for Milvus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Milvus integration | 
**url** | **str** | Public Endpoint. Example: Enter your public endpoint for your Milvus cluster | 
**token** | **str** | Token. Example: Enter your cluster token or Username/Password | [optional] 
**username** | **str** | Username. Example: Enter your cluster Username | [optional] 
**password** | **str** | Password. Example: Enter your cluster Password | [optional] 

## Example

```python
from vectorize_client.models.milvus_auth_config import MILVUSAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MILVUSAuthConfig from a JSON string
milvus_auth_config_instance = MILVUSAuthConfig.from_json(json)
# print the JSON string representation of the object
print(MILVUSAuthConfig.to_json())

# convert the object into a dict
milvus_auth_config_dict = milvus_auth_config_instance.to_dict()
# create an instance of MILVUSAuthConfig from a dict
milvus_auth_config_from_dict = MILVUSAuthConfig.from_dict(milvus_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


