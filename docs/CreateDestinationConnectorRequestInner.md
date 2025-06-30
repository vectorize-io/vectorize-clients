# CreateDestinationConnectorRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;CAPELLA\&quot;) | 
**config** | [**TURBOPUFFERConfig**](TURBOPUFFERConfig.md) |  | 

## Example

```python
from vectorize_client.models.create_destination_connector_request_inner import CreateDestinationConnectorRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDestinationConnectorRequestInner from a JSON string
create_destination_connector_request_inner_instance = CreateDestinationConnectorRequestInner.from_json(json)
# print the JSON string representation of the object
print(CreateDestinationConnectorRequestInner.to_json())

# convert the object into a dict
create_destination_connector_request_inner_dict = create_destination_connector_request_inner_instance.to_dict()
# create an instance of CreateDestinationConnectorRequestInner from a dict
create_destination_connector_request_inner_from_dict = CreateDestinationConnectorRequestInner.from_dict(create_destination_connector_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


