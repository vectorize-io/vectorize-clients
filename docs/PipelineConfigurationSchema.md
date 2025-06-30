# PipelineConfigurationSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_connectors** | [**List[SourceConnectorSchema]**](SourceConnectorSchema.md) |  | 
**destination_connector** | [**DestinationConnectorSchema**](DestinationConnectorSchema.md) |  | 
**ai_platform** | [**AIPlatformSchema**](AIPlatformSchema.md) |  | 
**pipeline_name** | **str** |  | 
**schedule** | [**ScheduleSchema**](ScheduleSchema.md) |  | 

## Example

```python
from vectorize_client.models.pipeline_configuration_schema import PipelineConfigurationSchema

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineConfigurationSchema from a JSON string
pipeline_configuration_schema_instance = PipelineConfigurationSchema.from_json(json)
# print the JSON string representation of the object
print(PipelineConfigurationSchema.to_json())

# convert the object into a dict
pipeline_configuration_schema_dict = pipeline_configuration_schema_instance.to_dict()
# create an instance of PipelineConfigurationSchema from a dict
pipeline_configuration_schema_from_dict = PipelineConfigurationSchema.from_dict(pipeline_configuration_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


