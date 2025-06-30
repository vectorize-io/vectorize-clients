# QDRANTAuthConfig

Authentication configuration for Qdrant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Qdrant integration | 
**host** | **str** | Host. Example: Enter your host | 
**api_key** | **str** | API Key. Example: Enter your API key | 

## Example

```python
from vectorize_client.models.qdrant_auth_config import QDRANTAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of QDRANTAuthConfig from a JSON string
qdrant_auth_config_instance = QDRANTAuthConfig.from_json(json)
# print the JSON string representation of the object
print(QDRANTAuthConfig.to_json())

# convert the object into a dict
qdrant_auth_config_dict = qdrant_auth_config_instance.to_dict()
# create an instance of QDRANTAuthConfig from a dict
qdrant_auth_config_from_dict = QDRANTAuthConfig.from_dict(qdrant_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


