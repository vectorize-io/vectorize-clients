# Turbopuffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;TURBOPUFFER\&quot;) | 
**config** | [**TURBOPUFFERConfig**](TURBOPUFFERConfig.md) |  | 

## Example

```python
from vectorize_client.models.turbopuffer import Turbopuffer

# TODO update the JSON string below
json = "{}"
# create an instance of Turbopuffer from a JSON string
turbopuffer_instance = Turbopuffer.from_json(json)
# print the JSON string representation of the object
print(Turbopuffer.to_json())

# convert the object into a dict
turbopuffer_dict = turbopuffer_instance.to_dict()
# create an instance of Turbopuffer from a dict
turbopuffer_from_dict = Turbopuffer.from_dict(turbopuffer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


