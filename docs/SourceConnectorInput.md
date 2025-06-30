# SourceConnectorInput

Source connector configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the source connector | 
**type** | **str** | Type of source connector | 
**config** | [**SourceConnectorInputConfig**](SourceConnectorInputConfig.md) |  | 

## Example

```python
from vectorize_client.models.source_connector_input import SourceConnectorInput

# TODO update the JSON string below
json = "{}"
# create an instance of SourceConnectorInput from a JSON string
source_connector_input_instance = SourceConnectorInput.from_json(json)
# print the JSON string representation of the object
print(SourceConnectorInput.to_json())

# convert the object into a dict
source_connector_input_dict = source_connector_input_instance.to_dict()
# create an instance of SourceConnectorInput from a dict
source_connector_input_from_dict = SourceConnectorInput.from_dict(source_connector_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


