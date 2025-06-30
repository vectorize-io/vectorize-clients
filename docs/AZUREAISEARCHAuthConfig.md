# AZUREAISEARCHAuthConfig

Authentication configuration for Azure AI Search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Azure AI Search integration | 
**service_name** | **str** | Azure AI Search Service Name. Example: Enter your Azure AI Search service name | 
**api_key** | **str** | API Key. Example: Enter your API key | 

## Example

```python
from vectorize_client.models.azureaisearch_auth_config import AZUREAISEARCHAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AZUREAISEARCHAuthConfig from a JSON string
azureaisearch_auth_config_instance = AZUREAISEARCHAuthConfig.from_json(json)
# print the JSON string representation of the object
print(AZUREAISEARCHAuthConfig.to_json())

# convert the object into a dict
azureaisearch_auth_config_dict = azureaisearch_auth_config_instance.to_dict()
# create an instance of AZUREAISEARCHAuthConfig from a dict
azureaisearch_auth_config_from_dict = AZUREAISEARCHAuthConfig.from_dict(azureaisearch_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


