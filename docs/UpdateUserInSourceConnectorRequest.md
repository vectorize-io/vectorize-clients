# UpdateUserInSourceConnectorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** |  | 
**selected_files** | [**Dict[str, AddUserToSourceConnectorRequestSelectedFilesValue]**](AddUserToSourceConnectorRequestSelectedFilesValue.md) |  | [optional] 
**refresh_token** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.update_user_in_source_connector_request import UpdateUserInSourceConnectorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserInSourceConnectorRequest from a JSON string
update_user_in_source_connector_request_instance = UpdateUserInSourceConnectorRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateUserInSourceConnectorRequest.to_json())

# convert the object into a dict
update_user_in_source_connector_request_dict = update_user_in_source_connector_request_instance.to_dict()
# create an instance of UpdateUserInSourceConnectorRequest from a dict
update_user_in_source_connector_request_from_dict = UpdateUserInSourceConnectorRequest.from_dict(update_user_in_source_connector_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


