# Sharepoint2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;SHAREPOINT\&quot;) | 

## Example

```python
from vectorize_client.models.sharepoint2 import Sharepoint2

# TODO update the JSON string below
json = "{}"
# create an instance of Sharepoint2 from a JSON string
sharepoint2_instance = Sharepoint2.from_json(json)
# print the JSON string representation of the object
print(Sharepoint2.to_json())

# convert the object into a dict
sharepoint2_dict = sharepoint2_instance.to_dict()
# create an instance of Sharepoint2 from a dict
sharepoint2_from_dict = Sharepoint2.from_dict(sharepoint2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


