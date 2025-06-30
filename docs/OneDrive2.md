# OneDrive2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;ONE_DRIVE\&quot;) | 

## Example

```python
from vectorize_client.models.one_drive2 import OneDrive2

# TODO update the JSON string below
json = "{}"
# create an instance of OneDrive2 from a JSON string
one_drive2_instance = OneDrive2.from_json(json)
# print the JSON string representation of the object
print(OneDrive2.to_json())

# convert the object into a dict
one_drive2_dict = one_drive2_instance.to_dict()
# create an instance of OneDrive2 from a dict
one_drive2_from_dict = OneDrive2.from_dict(one_drive2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


