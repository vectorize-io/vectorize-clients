# AddUserToSourceConnectorRequestSelectedFiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_ids** | **List[str]** |  | [optional] 
**database_ids** | **List[str]** |  | [optional] 

## Example

```python
from vectorize_client.models.add_user_to_source_connector_request_selected_files import AddUserToSourceConnectorRequestSelectedFiles

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserToSourceConnectorRequestSelectedFiles from a JSON string
add_user_to_source_connector_request_selected_files_instance = AddUserToSourceConnectorRequestSelectedFiles.from_json(json)
# print the JSON string representation of the object
print(AddUserToSourceConnectorRequestSelectedFiles.to_json())

# convert the object into a dict
add_user_to_source_connector_request_selected_files_dict = add_user_to_source_connector_request_selected_files_instance.to_dict()
# create an instance of AddUserToSourceConnectorRequestSelectedFiles from a dict
add_user_to_source_connector_request_selected_files_from_dict = AddUserToSourceConnectorRequestSelectedFiles.from_dict(add_user_to_source_connector_request_selected_files_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


