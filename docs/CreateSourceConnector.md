# CreateSourceConnector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**type** | [**SourceConnectorType**](SourceConnectorType.md) |  | 
**config** | **Dict[str, Optional[object]]** |  | [optional] 

## Example

```python
from vectorize_client.models.create_source_connector import CreateSourceConnector

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSourceConnector from a JSON string
create_source_connector_instance = CreateSourceConnector.from_json(json)
# print the JSON string representation of the object
print(CreateSourceConnector.to_json())

# convert the object into a dict
create_source_connector_dict = create_source_connector_instance.to_dict()
# create an instance of CreateSourceConnector from a dict
create_source_connector_from_dict = CreateSourceConnector.from_dict(create_source_connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


