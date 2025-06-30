# CreateDestinationConnectorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**connectors** | [**List[CreatedDestinationConnector]**](CreatedDestinationConnector.md) |  | 

## Example

```python
from vectorize_client.models.create_destination_connector_response import CreateDestinationConnectorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDestinationConnectorResponse from a JSON string
create_destination_connector_response_instance = CreateDestinationConnectorResponse.from_json(json)
# print the JSON string representation of the object
print(CreateDestinationConnectorResponse.to_json())

# convert the object into a dict
create_destination_connector_response_dict = create_destination_connector_response_instance.to_dict()
# create an instance of CreateDestinationConnectorResponse from a dict
create_destination_connector_response_from_dict = CreateDestinationConnectorResponse.from_dict(create_destination_connector_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


