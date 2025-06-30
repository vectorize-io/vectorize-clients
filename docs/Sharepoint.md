# Sharepoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;SHAREPOINT\&quot;) | 
**config** | [**SHAREPOINTConfig**](SHAREPOINTConfig.md) |  | 

## Example

```python
from vectorize_client.models.sharepoint import Sharepoint

# TODO update the JSON string below
json = "{}"
# create an instance of Sharepoint from a JSON string
sharepoint_instance = Sharepoint.from_json(json)
# print the JSON string representation of the object
print(Sharepoint.to_json())

# convert the object into a dict
sharepoint_dict = sharepoint_instance.to_dict()
# create an instance of Sharepoint from a dict
sharepoint_from_dict = Sharepoint.from_dict(sharepoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


