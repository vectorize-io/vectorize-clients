# Capella


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;CAPELLA\&quot;) | 
**config** | [**CAPELLAConfig**](CAPELLAConfig.md) |  | 

## Example

```python
from vectorize_client.models.capella import Capella

# TODO update the JSON string below
json = "{}"
# create an instance of Capella from a JSON string
capella_instance = Capella.from_json(json)
# print the JSON string representation of the object
print(Capella.to_json())

# convert the object into a dict
capella_dict = capella_instance.to_dict()
# create an instance of Capella from a dict
capella_from_dict = Capella.from_dict(capella_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


