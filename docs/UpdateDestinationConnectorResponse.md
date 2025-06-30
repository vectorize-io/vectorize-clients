# UpdateDestinationConnectorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**UpdatedDestinationConnectorData**](UpdatedDestinationConnectorData.md) |  | 

## Example

```python
from vectorize_client.models.update_destination_connector_response import UpdateDestinationConnectorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDestinationConnectorResponse from a JSON string
update_destination_connector_response_instance = UpdateDestinationConnectorResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateDestinationConnectorResponse.to_json())

# convert the object into a dict
update_destination_connector_response_dict = update_destination_connector_response_instance.to_dict()
# create an instance of UpdateDestinationConnectorResponse from a dict
update_destination_connector_response_from_dict = UpdateDestinationConnectorResponse.from_dict(update_destination_connector_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


