# POSTGRESQLAuthConfig

Authentication configuration for PostgreSQL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your PostgreSQL integration | 
**host** | **str** | Host. Example: Enter the host of the deployment | 
**port** | **float** | Port. Example: Enter the port of the deployment | [optional] [default to 5432]
**database** | **str** | Database. Example: Enter the database name | 
**username** | **str** | Username. Example: Enter the username | 
**password** | **str** | Password. Example: Enter the username&#39;s password | 

## Example

```python
from vectorize_client.models.postgresql_auth_config import POSTGRESQLAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of POSTGRESQLAuthConfig from a JSON string
postgresql_auth_config_instance = POSTGRESQLAuthConfig.from_json(json)
# print the JSON string representation of the object
print(POSTGRESQLAuthConfig.to_json())

# convert the object into a dict
postgresql_auth_config_dict = postgresql_auth_config_instance.to_dict()
# create an instance of POSTGRESQLAuthConfig from a dict
postgresql_auth_config_from_dict = POSTGRESQLAuthConfig.from_dict(postgresql_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


