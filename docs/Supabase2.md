# Supabase2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;SUPABASE\&quot;) | 

## Example

```python
from vectorize_client.models.supabase2 import Supabase2

# TODO update the JSON string below
json = "{}"
# create an instance of Supabase2 from a JSON string
supabase2_instance = Supabase2.from_json(json)
# print the JSON string representation of the object
print(Supabase2.to_json())

# convert the object into a dict
supabase2_dict = supabase2_instance.to_dict()
# create an instance of Supabase2 from a dict
supabase2_from_dict = Supabase2.from_dict(supabase2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


