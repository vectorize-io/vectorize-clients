# DestinationConnectorSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | [**DestinationConnectorType**](DestinationConnectorType.md) |  | 
**config** | **Dict[str, Optional[object]]** |  | [optional] 

## Example

```python
from vectorize_client.models.destination_connector_schema import DestinationConnectorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationConnectorSchema from a JSON string
destination_connector_schema_instance = DestinationConnectorSchema.from_json(json)
# print the JSON string representation of the object
print(DestinationConnectorSchema.to_json())

# convert the object into a dict
destination_connector_schema_dict = destination_connector_schema_instance.to_dict()
# create an instance of DestinationConnectorSchema from a dict
destination_connector_schema_from_dict = DestinationConnectorSchema.from_dict(destination_connector_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


