# UpdateSourceConnectorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**FIREFLIESConfig**](FIREFLIESConfig.md) |  | [optional] 

## Example

```python
from vectorize_client.models.update_source_connector_request import UpdateSourceConnectorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSourceConnectorRequest from a JSON string
update_source_connector_request_instance = UpdateSourceConnectorRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSourceConnectorRequest.to_json())

# convert the object into a dict
update_source_connector_request_dict = update_source_connector_request_instance.to_dict()
# create an instance of UpdateSourceConnectorRequest from a dict
update_source_connector_request_from_dict = UpdateSourceConnectorRequest.from_dict(update_source_connector_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


