# SUPABASEAuthConfig

Authentication configuration for Supabase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Supabase integration | 
**host** | **str** | Host. Example: Enter the host of the deployment | [default to 'aws-0-us-east-1.pooler.supabase.com']
**port** | **float** | Port. Example: Enter the port of the deployment | [optional] [default to 5432]
**database** | **str** | Database. Example: Enter the database name | 
**username** | **str** | Username. Example: Enter the username | 
**password** | **str** | Password. Example: Enter the username&#39;s password | 

## Example

```python
from vectorize_client.models.supabase_auth_config import SUPABASEAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SUPABASEAuthConfig from a JSON string
supabase_auth_config_instance = SUPABASEAuthConfig.from_json(json)
# print the JSON string representation of the object
print(SUPABASEAuthConfig.to_json())

# convert the object into a dict
supabase_auth_config_dict = supabase_auth_config_instance.to_dict()
# create an instance of SUPABASEAuthConfig from a dict
supabase_auth_config_from_dict = SUPABASEAuthConfig.from_dict(supabase_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


