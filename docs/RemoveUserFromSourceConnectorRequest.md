# RemoveUserFromSourceConnectorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** |  | 

## Example

```python
from vectorize_client.models.remove_user_from_source_connector_request import RemoveUserFromSourceConnectorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveUserFromSourceConnectorRequest from a JSON string
remove_user_from_source_connector_request_instance = RemoveUserFromSourceConnectorRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveUserFromSourceConnectorRequest.to_json())

# convert the object into a dict
remove_user_from_source_connector_request_dict = remove_user_from_source_connector_request_instance.to_dict()
# create an instance of RemoveUserFromSourceConnectorRequest from a dict
remove_user_from_source_connector_request_from_dict = RemoveUserFromSourceConnectorRequest.from_dict(remove_user_from_source_connector_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


