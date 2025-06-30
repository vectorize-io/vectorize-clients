# Postgresql1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**POSTGRESQLConfig**](POSTGRESQLConfig.md) |  | [optional] 

## Example

```python
from vectorize_client.models.postgresql1 import Postgresql1

# TODO update the JSON string below
json = "{}"
# create an instance of Postgresql1 from a JSON string
postgresql1_instance = Postgresql1.from_json(json)
# print the JSON string representation of the object
print(Postgresql1.to_json())

# convert the object into a dict
postgresql1_dict = postgresql1_instance.to_dict()
# create an instance of Postgresql1 from a dict
postgresql1_from_dict = Postgresql1.from_dict(postgresql1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


