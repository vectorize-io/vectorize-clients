# FIREFLIESConfig

Configuration for Fireflies.ai connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_date** | **date** | Start Date. Include meetings from this date forward. Example: Enter a date: Example 2023-12-31 | 
**end_date** | **date** | End Date. Include meetings up to this date only. Example: Enter a date: Example 2023-12-31 | [optional] 
**title_filter_type** | **str** |  | [default to 'AND']
**title_filter** | **str** | Title Filter. Only include meetings with this text in the title. Example: Enter meeting title | [optional] 
**participant_filter_type** | **str** |  | [default to 'AND']
**participant_filter** | **str** | Participant&#39;s Email Filter. Include meetings where these participants were invited. Example: Enter participant email | [optional] 
**max_meetings** | **float** | Max Meetings. Enter -1 for all available meetings, or specify a limit. Example: Enter maximum number of meetings to retrieve. (-1 for all) | [optional] [default to -1]

## Example

```python
from vectorize_client.models.fireflies_config import FIREFLIESConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FIREFLIESConfig from a JSON string
fireflies_config_instance = FIREFLIESConfig.from_json(json)
# print the JSON string representation of the object
print(FIREFLIESConfig.to_json())

# convert the object into a dict
fireflies_config_dict = fireflies_config_instance.to_dict()
# create an instance of FIREFLIESConfig from a dict
fireflies_config_from_dict = FIREFLIESConfig.from_dict(fireflies_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


