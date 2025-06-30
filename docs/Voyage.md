# Voyage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;VOYAGE\&quot;) | 
**config** | [**VOYAGEAuthConfig**](VOYAGEAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.voyage import Voyage

# TODO update the JSON string below
json = "{}"
# create an instance of Voyage from a JSON string
voyage_instance = Voyage.from_json(json)
# print the JSON string representation of the object
print(Voyage.to_json())

# convert the object into a dict
voyage_dict = voyage_instance.to_dict()
# create an instance of Voyage from a dict
voyage_from_dict = Voyage.from_dict(voyage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


