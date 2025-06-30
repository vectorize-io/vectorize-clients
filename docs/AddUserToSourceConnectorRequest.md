# AddUserToSourceConnectorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** |  | 
**selected_files** | [**Dict[str, AddUserToSourceConnectorRequestSelectedFilesValue]**](AddUserToSourceConnectorRequestSelectedFilesValue.md) |  | 
**refresh_token** | **str** |  | 

## Example

```python
from vectorize_client.models.add_user_to_source_connector_request import AddUserToSourceConnectorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserToSourceConnectorRequest from a JSON string
add_user_to_source_connector_request_instance = AddUserToSourceConnectorRequest.from_json(json)
# print the JSON string representation of the object
print(AddUserToSourceConnectorRequest.to_json())

# convert the object into a dict
add_user_to_source_connector_request_dict = add_user_to_source_connector_request_instance.to_dict()
# create an instance of AddUserToSourceConnectorRequest from a dict
add_user_to_source_connector_request_from_dict = AddUserToSourceConnectorRequest.from_dict(add_user_to_source_connector_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


