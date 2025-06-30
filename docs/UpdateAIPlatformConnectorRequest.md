# UpdateAiplatformConnectorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**VOYAGEAuthConfig**](VOYAGEAuthConfig.md) |  | [optional] 

## Example

```python
from vectorize_client.models.update_aiplatform_connector_request import UpdateAiplatformConnectorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAiplatformConnectorRequest from a JSON string
update_aiplatform_connector_request_instance = UpdateAiplatformConnectorRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAiplatformConnectorRequest.to_json())

# convert the object into a dict
update_aiplatform_connector_request_dict = update_aiplatform_connector_request_instance.to_dict()
# create an instance of UpdateAiplatformConnectorRequest from a dict
update_aiplatform_connector_request_from_dict = UpdateAiplatformConnectorRequest.from_dict(update_aiplatform_connector_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


