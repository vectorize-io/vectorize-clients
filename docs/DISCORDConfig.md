# DISCORDConfig

Configuration for Discord connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emoji** | **str** | Emoji Filter. Example: Enter custom emoji filter name | [optional] 
**author** | **str** | Author Filter. Example: Enter author name | [optional] 
**ignore_author** | **str** | Ignore Author Filter. Example: Enter ignore author name | [optional] 
**limit** | **float** | Limit. Example: Enter limit | [optional] [default to 10000]
**thread_message_inclusion** | **str** | Thread Message Inclusion | [optional] [default to 'ALL']
**filter_logic** | **str** | Filter Logic | [optional] [default to 'AND']
**thread_message_mode** | **str** | Thread Message Mode | [optional] [default to 'CONCATENATE']

## Example

```python
from vectorize_client.models.discord_config import DISCORDConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DISCORDConfig from a JSON string
discord_config_instance = DISCORDConfig.from_json(json)
# print the JSON string representation of the object
print(DISCORDConfig.to_json())

# convert the object into a dict
discord_config_dict = discord_config_instance.to_dict()
# create an instance of DISCORDConfig from a dict
discord_config_from_dict = DISCORDConfig.from_dict(discord_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


