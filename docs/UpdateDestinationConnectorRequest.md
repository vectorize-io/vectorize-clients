# UpdateDestinationConnectorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**TURBOPUFFERConfig**](TURBOPUFFERConfig.md) |  | [optional] 

## Example

```python
from vectorize_client.models.update_destination_connector_request import UpdateDestinationConnectorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDestinationConnectorRequest from a JSON string
update_destination_connector_request_instance = UpdateDestinationConnectorRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDestinationConnectorRequest.to_json())

# convert the object into a dict
update_destination_connector_request_dict = update_destination_connector_request_instance.to_dict()
# create an instance of UpdateDestinationConnectorRequest from a dict
update_destination_connector_request_from_dict = UpdateDestinationConnectorRequest.from_dict(update_destination_connector_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


