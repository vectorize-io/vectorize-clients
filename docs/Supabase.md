# Supabase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;SUPABASE\&quot;) | 
**config** | [**SUPABASEConfig**](SUPABASEConfig.md) |  | 

## Example

```python
from vectorize_client.models.supabase import Supabase

# TODO update the JSON string below
json = "{}"
# create an instance of Supabase from a JSON string
supabase_instance = Supabase.from_json(json)
# print the JSON string representation of the object
print(Supabase.to_json())

# convert the object into a dict
supabase_dict = supabase_instance.to_dict()
# create an instance of Supabase from a dict
supabase_from_dict = Supabase.from_dict(supabase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


