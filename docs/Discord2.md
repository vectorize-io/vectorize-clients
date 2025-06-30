# Discord2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;DISCORD\&quot;) | 

## Example

```python
from vectorize_client.models.discord2 import Discord2

# TODO update the JSON string below
json = "{}"
# create an instance of Discord2 from a JSON string
discord2_instance = Discord2.from_json(json)
# print the JSON string representation of the object
print(Discord2.to_json())

# convert the object into a dict
discord2_dict = discord2_instance.to_dict()
# create an instance of Discord2 from a dict
discord2_from_dict = Discord2.from_dict(discord2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


