# CAPELLAAuthConfig

Authentication configuration for Couchbase Capella

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Capella integration | 
**username** | **str** | Cluster Access Name. Example: Enter your cluster access name | 
**password** | **str** | Cluster Access Password. Example: Enter your cluster access password | 
**connection_string** | **str** | Connection String. Example: Enter your connection string | 

## Example

```python
from vectorize_client.models.capella_auth_config import CAPELLAAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CAPELLAAuthConfig from a JSON string
capella_auth_config_instance = CAPELLAAuthConfig.from_json(json)
# print the JSON string representation of the object
print(CAPELLAAuthConfig.to_json())

# convert the object into a dict
capella_auth_config_dict = capella_auth_config_instance.to_dict()
# create an instance of CAPELLAAuthConfig from a dict
capella_auth_config_from_dict = CAPELLAAuthConfig.from_dict(capella_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


