# Azureaisearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;AZUREAISEARCH\&quot;) | 
**config** | [**AZUREAISEARCHConfig**](AZUREAISEARCHConfig.md) |  | 

## Example

```python
from vectorize_client.models.azureaisearch import Azureaisearch

# TODO update the JSON string below
json = "{}"
# create an instance of Azureaisearch from a JSON string
azureaisearch_instance = Azureaisearch.from_json(json)
# print the JSON string representation of the object
print(Azureaisearch.to_json())

# convert the object into a dict
azureaisearch_dict = azureaisearch_instance.to_dict()
# create an instance of Azureaisearch from a dict
azureaisearch_from_dict = Azureaisearch.from_dict(azureaisearch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


