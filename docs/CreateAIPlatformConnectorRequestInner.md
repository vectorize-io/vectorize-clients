# CreateAIPlatformConnectorRequestInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;BEDROCK\&quot;) | 
**config** | [**VOYAGEAuthConfig**](VOYAGEAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.create_ai_platform_connector_request_inner import CreateAIPlatformConnectorRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAIPlatformConnectorRequestInner from a JSON string
create_ai_platform_connector_request_inner_instance = CreateAIPlatformConnectorRequestInner.from_json(json)
# print the JSON string representation of the object
print(CreateAIPlatformConnectorRequestInner.to_json())

# convert the object into a dict
create_ai_platform_connector_request_inner_dict = create_ai_platform_connector_request_inner_instance.to_dict()
# create an instance of CreateAIPlatformConnectorRequestInner from a dict
create_ai_platform_connector_request_inner_from_dict = CreateAIPlatformConnectorRequestInner.from_dict(create_ai_platform_connector_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


