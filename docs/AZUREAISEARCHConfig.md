# AZUREAISEARCHConfig

Configuration for Azure AI Search connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **str** | Index Name. Example: Enter index name | 

## Example

```python
from vectorize_client.models.azureaisearch_config import AZUREAISEARCHConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AZUREAISEARCHConfig from a JSON string
azureaisearch_config_instance = AZUREAISEARCHConfig.from_json(json)
# print the JSON string representation of the object
print(AZUREAISEARCHConfig.to_json())

# convert the object into a dict
azureaisearch_config_dict = azureaisearch_config_instance.to_dict()
# create an instance of AZUREAISEARCHConfig from a dict
azureaisearch_config_from_dict = AZUREAISEARCHConfig.from_dict(azureaisearch_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


