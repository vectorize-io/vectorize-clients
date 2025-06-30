# AZUREBLOBAuthConfig

Authentication configuration for Azure Blob Storage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**storage_account_name** | **str** | Storage Account Name. Example: Enter Storage Account Name | 
**storage_account_key** | **str** | Storage Account Key. Example: Enter Storage Account Key | 
**container** | **str** | Container. Example: Enter Container Name | 
**endpoint** | **str** | Endpoint. Example: Enter Endpoint URL | [optional] 

## Example

```python
from vectorize_client.models.azureblob_auth_config import AZUREBLOBAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AZUREBLOBAuthConfig from a JSON string
azureblob_auth_config_instance = AZUREBLOBAuthConfig.from_json(json)
# print the JSON string representation of the object
print(AZUREBLOBAuthConfig.to_json())

# convert the object into a dict
azureblob_auth_config_dict = azureblob_auth_config_instance.to_dict()
# create an instance of AZUREBLOBAuthConfig from a dict
azureblob_auth_config_from_dict = AZUREBLOBAuthConfig.from_dict(azureblob_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


