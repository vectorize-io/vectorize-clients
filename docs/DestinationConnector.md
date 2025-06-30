# DestinationConnector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 
**name** | **str** |  | 
**config_doc** | **Dict[str, Optional[object]]** |  | [optional] 
**created_at** | **str** |  | [optional] 
**created_by_id** | **str** |  | [optional] 
**last_updated_by_id** | **str** |  | [optional] 
**created_by_email** | **str** |  | [optional] 
**last_updated_by_email** | **str** |  | [optional] 
**error_message** | **str** |  | [optional] 
**verification_status** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.destination_connector import DestinationConnector

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationConnector from a JSON string
destination_connector_instance = DestinationConnector.from_json(json)
# print the JSON string representation of the object
print(DestinationConnector.to_json())

# convert the object into a dict
destination_connector_dict = destination_connector_instance.to_dict()
# create an instance of DestinationConnector from a dict
destination_connector_from_dict = DestinationConnector.from_dict(destination_connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


