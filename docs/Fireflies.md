# Fireflies


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;FIREFLIES\&quot;) | 
**config** | [**FIREFLIESConfig**](FIREFLIESConfig.md) |  | 

## Example

```python
from vectorize_client.models.fireflies import Fireflies

# TODO update the JSON string below
json = "{}"
# create an instance of Fireflies from a JSON string
fireflies_instance = Fireflies.from_json(json)
# print the JSON string representation of the object
print(Fireflies.to_json())

# convert the object into a dict
fireflies_dict = fireflies_instance.to_dict()
# create an instance of Fireflies from a dict
fireflies_from_dict = Fireflies.from_dict(fireflies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


