# StartFileUploadToConnectorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**content_type** | **str** |  | 
**metadata** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.start_file_upload_to_connector_request import StartFileUploadToConnectorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartFileUploadToConnectorRequest from a JSON string
start_file_upload_to_connector_request_instance = StartFileUploadToConnectorRequest.from_json(json)
# print the JSON string representation of the object
print(StartFileUploadToConnectorRequest.to_json())

# convert the object into a dict
start_file_upload_to_connector_request_dict = start_file_upload_to_connector_request_instance.to_dict()
# create an instance of StartFileUploadToConnectorRequest from a dict
start_file_upload_to_connector_request_from_dict = StartFileUploadToConnectorRequest.from_dict(start_file_upload_to_connector_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


