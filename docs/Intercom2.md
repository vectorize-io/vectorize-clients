# Intercom2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;INTERCOM\&quot;) | 

## Example

```python
from vectorize_client.models.intercom2 import Intercom2

# TODO update the JSON string below
json = "{}"
# create an instance of Intercom2 from a JSON string
intercom2_instance = Intercom2.from_json(json)
# print the JSON string representation of the object
print(Intercom2.to_json())

# convert the object into a dict
intercom2_dict = intercom2_instance.to_dict()
# create an instance of Intercom2 from a dict
intercom2_from_dict = Intercom2.from_dict(intercom2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


