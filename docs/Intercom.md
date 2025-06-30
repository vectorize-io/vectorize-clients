# Intercom


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;INTERCOM\&quot;) | 
**config** | [**INTERCOMConfig**](INTERCOMConfig.md) |  | 

## Example

```python
from vectorize_client.models.intercom import Intercom

# TODO update the JSON string below
json = "{}"
# create an instance of Intercom from a JSON string
intercom_instance = Intercom.from_json(json)
# print the JSON string representation of the object
print(Intercom.to_json())

# convert the object into a dict
intercom_dict = intercom_instance.to_dict()
# create an instance of Intercom from a dict
intercom_from_dict = Intercom.from_dict(intercom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


