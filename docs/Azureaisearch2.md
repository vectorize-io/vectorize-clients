# Azureaisearch2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;AZUREAISEARCH\&quot;) | 

## Example

```python
from vectorize_client.models.azureaisearch2 import Azureaisearch2

# TODO update the JSON string below
json = "{}"
# create an instance of Azureaisearch2 from a JSON string
azureaisearch2_instance = Azureaisearch2.from_json(json)
# print the JSON string representation of the object
print(Azureaisearch2.to_json())

# convert the object into a dict
azureaisearch2_dict = azureaisearch2_instance.to_dict()
# create an instance of Azureaisearch2 from a dict
azureaisearch2_from_dict = Azureaisearch2.from_dict(azureaisearch2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


