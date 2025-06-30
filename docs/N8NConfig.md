# N8NConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** |  | 
**webhook_path** | **str** |  | 
**headers** | **Dict[str, str]** |  | [optional] 

## Example

```python
from vectorize_client.models.n8_n_config import N8NConfig

# TODO update the JSON string below
json = "{}"
# create an instance of N8NConfig from a JSON string
n8_n_config_instance = N8NConfig.from_json(json)
# print the JSON string representation of the object
print(N8NConfig.to_json())

# convert the object into a dict
n8_n_config_dict = n8_n_config_instance.to_dict()
# create an instance of N8NConfig from a dict
n8_n_config_from_dict = N8NConfig.from_dict(n8_n_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


