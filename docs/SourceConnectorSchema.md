# SourceConnectorSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | [**SourceConnectorType**](SourceConnectorType.md) |  | 
**config** | **Dict[str, Optional[object]]** |  | [optional] 

## Example

```python
from vectorize_client.models.source_connector_schema import SourceConnectorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SourceConnectorSchema from a JSON string
source_connector_schema_instance = SourceConnectorSchema.from_json(json)
# print the JSON string representation of the object
print(SourceConnectorSchema.to_json())

# convert the object into a dict
source_connector_schema_dict = source_connector_schema_instance.to_dict()
# create an instance of SourceConnectorSchema from a dict
source_connector_schema_from_dict = SourceConnectorSchema.from_dict(source_connector_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


