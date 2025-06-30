# DISCORDAuthConfig

Authentication configuration for Discord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**server_id** | **str** | Server ID. Example: Enter Server ID | 
**bot_token** | **str** | Bot token. Example: Enter Token | 
**channel_ids** | **str** | Channel ID. Example: Enter channel ID | 

## Example

```python
from vectorize_client.models.discord_auth_config import DISCORDAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DISCORDAuthConfig from a JSON string
discord_auth_config_instance = DISCORDAuthConfig.from_json(json)
# print the JSON string representation of the object
print(DISCORDAuthConfig.to_json())

# convert the object into a dict
discord_auth_config_dict = discord_auth_config_instance.to_dict()
# create an instance of DISCORDAuthConfig from a dict
discord_auth_config_from_dict = DISCORDAuthConfig.from_dict(discord_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


