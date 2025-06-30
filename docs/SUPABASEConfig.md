# SUPABASEConfig

Configuration for Supabase connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table** | **str** | Table Name. Example: Enter &lt;table name&gt; or &lt;schema&gt;.&lt;table name&gt; | 

## Example

```python
from vectorize_client.models.supabase_config import SUPABASEConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SUPABASEConfig from a JSON string
supabase_config_instance = SUPABASEConfig.from_json(json)
# print the JSON string representation of the object
print(SUPABASEConfig.to_json())

# convert the object into a dict
supabase_config_dict = supabase_config_instance.to_dict()
# create an instance of SUPABASEConfig from a dict
supabase_config_from_dict = SUPABASEConfig.from_dict(supabase_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


