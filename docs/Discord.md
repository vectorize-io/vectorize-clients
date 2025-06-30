# Discord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;DISCORD\&quot;) | 
**config** | [**DISCORDConfig**](DISCORDConfig.md) |  | 

## Example

```python
from vectorize_client.models.discord import Discord

# TODO update the JSON string below
json = "{}"
# create an instance of Discord from a JSON string
discord_instance = Discord.from_json(json)
# print the JSON string representation of the object
print(Discord.to_json())

# convert the object into a dict
discord_dict = discord_instance.to_dict()
# create an instance of Discord from a dict
discord_from_dict = Discord.from_dict(discord_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


