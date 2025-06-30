# SINGLESTOREAuthConfig

Authentication configuration for SingleStore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your SingleStore integration | 
**host** | **str** | Host. Example: Enter the host of the deployment | 
**port** | **float** | Port. Example: Enter the port of the deployment | 
**database** | **str** | Database. Example: Enter the database name | 
**username** | **str** | Username. Example: Enter the username | 
**password** | **str** | Password. Example: Enter the username&#39;s password | 

## Example

```python
from vectorize_client.models.singlestore_auth_config import SINGLESTOREAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SINGLESTOREAuthConfig from a JSON string
singlestore_auth_config_instance = SINGLESTOREAuthConfig.from_json(json)
# print the JSON string representation of the object
print(SINGLESTOREAuthConfig.to_json())

# convert the object into a dict
singlestore_auth_config_dict = singlestore_auth_config_instance.to_dict()
# create an instance of SINGLESTOREAuthConfig from a dict
singlestore_auth_config_from_dict = SINGLESTOREAuthConfig.from_dict(singlestore_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


