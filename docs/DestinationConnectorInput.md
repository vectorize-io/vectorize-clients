# DestinationConnectorInput

Destination connector configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the destination connector | 
**type** | **str** | Type of destination connector | 
**config** | [**DestinationConnectorInputConfig**](DestinationConnectorInputConfig.md) |  | 

## Example

```python
from vectorize_client.models.destination_connector_input import DestinationConnectorInput

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationConnectorInput from a JSON string
destination_connector_input_instance = DestinationConnectorInput.from_json(json)
# print the JSON string representation of the object
print(DestinationConnectorInput.to_json())

# convert the object into a dict
destination_connector_input_dict = destination_connector_input_instance.to_dict()
# create an instance of DestinationConnectorInput from a dict
destination_connector_input_from_dict = DestinationConnectorInput.from_dict(destination_connector_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


