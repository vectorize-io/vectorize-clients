# Capella2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;CAPELLA\&quot;) | 

## Example

```python
from vectorize_client.models.capella2 import Capella2

# TODO update the JSON string below
json = "{}"
# create an instance of Capella2 from a JSON string
capella2_instance = Capella2.from_json(json)
# print the JSON string representation of the object
print(Capella2.to_json())

# convert the object into a dict
capella2_dict = capella2_instance.to_dict()
# create an instance of Capella2 from a dict
capella2_from_dict = Capella2.from_dict(capella2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


