# DATASTAXAuthConfig

Authentication configuration for DataStax Astra

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your DataStax integration | 
**endpoint_secret** | **str** | API Endpoint. Example: Enter your API endpoint | 
**token** | **str** | Application Token. Example: Enter your application token | 

## Example

```python
from vectorize_client.models.datastax_auth_config import DATASTAXAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DATASTAXAuthConfig from a JSON string
datastax_auth_config_instance = DATASTAXAuthConfig.from_json(json)
# print the JSON string representation of the object
print(DATASTAXAuthConfig.to_json())

# convert the object into a dict
datastax_auth_config_dict = datastax_auth_config_instance.to_dict()
# create an instance of DATASTAXAuthConfig from a dict
datastax_auth_config_from_dict = DATASTAXAuthConfig.from_dict(datastax_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


