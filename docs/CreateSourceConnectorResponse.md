# CreateSourceConnectorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | 
**connectors** | [**List[CreatedSourceConnector]**](CreatedSourceConnector.md) |  | 

## Example

```python
from vectorize_client.models.create_source_connector_response import CreateSourceConnectorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSourceConnectorResponse from a JSON string
create_source_connector_response_instance = CreateSourceConnectorResponse.from_json(json)
# print the JSON string representation of the object
print(CreateSourceConnectorResponse.to_json())

# convert the object into a dict
create_source_connector_response_dict = create_source_connector_response_instance.to_dict()
# create an instance of CreateSourceConnectorResponse from a dict
create_source_connector_response_from_dict = CreateSourceConnectorResponse.from_dict(create_source_connector_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


