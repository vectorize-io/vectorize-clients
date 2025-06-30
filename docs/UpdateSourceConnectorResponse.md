# UpdateSourceConnectorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**data** | [**UpdateSourceConnectorResponseData**](UpdateSourceConnectorResponseData.md) |  | 

## Example

```python
from vectorize_client.models.update_source_connector_response import UpdateSourceConnectorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSourceConnectorResponse from a JSON string
update_source_connector_response_instance = UpdateSourceConnectorResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateSourceConnectorResponse.to_json())

# convert the object into a dict
update_source_connector_response_dict = update_source_connector_response_instance.to_dict()
# create an instance of UpdateSourceConnectorResponse from a dict
update_source_connector_response_from_dict = UpdateSourceConnectorResponse.from_dict(update_source_connector_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


