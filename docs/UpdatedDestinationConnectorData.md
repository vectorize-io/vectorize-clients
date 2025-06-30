# UpdatedDestinationConnectorData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated_connector** | [**DestinationConnector**](DestinationConnector.md) |  | 
**pipeline_ids** | **List[str]** |  | [optional] 

## Example

```python
from vectorize_client.models.updated_destination_connector_data import UpdatedDestinationConnectorData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatedDestinationConnectorData from a JSON string
updated_destination_connector_data_instance = UpdatedDestinationConnectorData.from_json(json)
# print the JSON string representation of the object
print(UpdatedDestinationConnectorData.to_json())

# convert the object into a dict
updated_destination_connector_data_dict = updated_destination_connector_data_instance.to_dict()
# create an instance of UpdatedDestinationConnectorData from a dict
updated_destination_connector_data_from_dict = UpdatedDestinationConnectorData.from_dict(updated_destination_connector_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


