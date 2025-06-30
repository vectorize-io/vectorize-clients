# OneDrive


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;ONE_DRIVE\&quot;) | 
**config** | [**ONEDRIVEConfig**](ONEDRIVEConfig.md) |  | 

## Example

```python
from vectorize_client.models.one_drive import OneDrive

# TODO update the JSON string below
json = "{}"
# create an instance of OneDrive from a JSON string
one_drive_instance = OneDrive.from_json(json)
# print the JSON string representation of the object
print(OneDrive.to_json())

# convert the object into a dict
one_drive_dict = one_drive_instance.to_dict()
# create an instance of OneDrive from a dict
one_drive_from_dict = OneDrive.from_dict(one_drive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


