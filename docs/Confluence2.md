# Confluence2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;CONFLUENCE\&quot;) | 

## Example

```python
from vectorize_client.models.confluence2 import Confluence2

# TODO update the JSON string below
json = "{}"
# create an instance of Confluence2 from a JSON string
confluence2_instance = Confluence2.from_json(json)
# print the JSON string representation of the object
print(Confluence2.to_json())

# convert the object into a dict
confluence2_dict = confluence2_instance.to_dict()
# create an instance of Confluence2 from a dict
confluence2_from_dict = Confluence2.from_dict(confluence2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


