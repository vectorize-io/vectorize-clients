# CreateDestinationConnector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | [**DestinationConnectorType**](DestinationConnectorType.md) |  | 
**config** | **Dict[str, Optional[object]]** |  | [optional] 

## Example

```python
from vectorize_client.models.create_destination_connector import CreateDestinationConnector

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDestinationConnector from a JSON string
create_destination_connector_instance = CreateDestinationConnector.from_json(json)
# print the JSON string representation of the object
print(CreateDestinationConnector.to_json())

# convert the object into a dict
create_destination_connector_dict = create_destination_connector_instance.to_dict()
# create an instance of CreateDestinationConnector from a dict
create_destination_connector_from_dict = CreateDestinationConnector.from_dict(create_destination_connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


