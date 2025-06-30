# ScheduleSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ScheduleSchemaType**](ScheduleSchemaType.md) |  | 

## Example

```python
from vectorize_client.models.schedule_schema import ScheduleSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleSchema from a JSON string
schedule_schema_instance = ScheduleSchema.from_json(json)
# print the JSON string representation of the object
print(ScheduleSchema.to_json())

# convert the object into a dict
schedule_schema_dict = schedule_schema_instance.to_dict()
# create an instance of ScheduleSchema from a dict
schedule_schema_from_dict = ScheduleSchema.from_dict(schedule_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


