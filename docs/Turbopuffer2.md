# Turbopuffer2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;TURBOPUFFER\&quot;) | 

## Example

```python
from vectorize_client.models.turbopuffer2 import Turbopuffer2

# TODO update the JSON string below
json = "{}"
# create an instance of Turbopuffer2 from a JSON string
turbopuffer2_instance = Turbopuffer2.from_json(json)
# print the JSON string representation of the object
print(Turbopuffer2.to_json())

# convert the object into a dict
turbopuffer2_dict = turbopuffer2_instance.to_dict()
# create an instance of Turbopuffer2 from a dict
turbopuffer2_from_dict = Turbopuffer2.from_dict(turbopuffer2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


