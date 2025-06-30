# CreateSourceConnectorRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;AWS_S3\&quot;) | 
**config** | [**FIREFLIESConfig**](FIREFLIESConfig.md) |  | 

## Example

```python
from vectorize_client.models.create_source_connector_request_inner import CreateSourceConnectorRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSourceConnectorRequestInner from a JSON string
create_source_connector_request_inner_instance = CreateSourceConnectorRequestInner.from_json(json)
# print the JSON string representation of the object
print(CreateSourceConnectorRequestInner.to_json())

# convert the object into a dict
create_source_connector_request_inner_dict = create_source_connector_request_inner_instance.to_dict()
# create an instance of CreateSourceConnectorRequestInner from a dict
create_source_connector_request_inner_from_dict = CreateSourceConnectorRequestInner.from_dict(create_source_connector_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


