# Postgresql2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;POSTGRESQL\&quot;) | 

## Example

```python
from vectorize_client.models.postgresql2 import Postgresql2

# TODO update the JSON string below
json = "{}"
# create an instance of Postgresql2 from a JSON string
postgresql2_instance = Postgresql2.from_json(json)
# print the JSON string representation of the object
print(Postgresql2.to_json())

# convert the object into a dict
postgresql2_dict = postgresql2_instance.to_dict()
# create an instance of Postgresql2 from a dict
postgresql2_from_dict = Postgresql2.from_dict(postgresql2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


