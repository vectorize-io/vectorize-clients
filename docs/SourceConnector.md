# SourceConnector


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
from vectorize_client.models.source_connector import SourceConnector

# TODO update the JSON string below
json = "{}"
# create an instance of SourceConnector from a JSON string
source_connector_instance = SourceConnector.from_json(json)
# print the JSON string representation of the object
print(SourceConnector.to_json())

# convert the object into a dict
source_connector_dict = source_connector_instance.to_dict()
# create an instance of SourceConnector from a dict
source_connector_from_dict = SourceConnector.from_dict(source_connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


