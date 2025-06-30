# UpdateSourceConnectorResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated_connector** | [**SourceConnector**](SourceConnector.md) |  | 
**pipeline_ids** | **List[str]** |  | [optional] 

## Example

```python
from vectorize_client.models.update_source_connector_response_data import UpdateSourceConnectorResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSourceConnectorResponseData from a JSON string
update_source_connector_response_data_instance = UpdateSourceConnectorResponseData.from_json(json)
# print the JSON string representation of the object
print(UpdateSourceConnectorResponseData.to_json())

# convert the object into a dict
update_source_connector_response_data_dict = update_source_connector_response_data_instance.to_dict()
# create an instance of UpdateSourceConnectorResponseData from a dict
update_source_connector_response_data_from_dict = UpdateSourceConnectorResponseData.from_dict(update_source_connector_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


