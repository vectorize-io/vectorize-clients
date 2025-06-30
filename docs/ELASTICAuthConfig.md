# ELASTICAuthConfig

Authentication configuration for Elasticsearch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Elastic integration | 
**host** | **str** | Host. Example: Enter your host | 
**port** | **str** | Port. Example: Enter your port | 
**api_key** | **str** | API Key. Example: Enter your API key | 

## Example

```python
from vectorize_client.models.elastic_auth_config import ELASTICAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ELASTICAuthConfig from a JSON string
elastic_auth_config_instance = ELASTICAuthConfig.from_json(json)
# print the JSON string representation of the object
print(ELASTICAuthConfig.to_json())

# convert the object into a dict
elastic_auth_config_dict = elastic_auth_config_instance.to_dict()
# create an instance of ELASTICAuthConfig from a dict
elastic_auth_config_from_dict = ELASTICAuthConfig.from_dict(elastic_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


