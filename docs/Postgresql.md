# Postgresql


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;POSTGRESQL\&quot;) | 
**config** | [**POSTGRESQLConfig**](POSTGRESQLConfig.md) |  | 

## Example

```python
from vectorize_client.models.postgresql import Postgresql

# TODO update the JSON string below
json = "{}"
# create an instance of Postgresql from a JSON string
postgresql_instance = Postgresql.from_json(json)
# print the JSON string representation of the object
print(Postgresql.to_json())

# convert the object into a dict
postgresql_dict = postgresql_instance.to_dict()
# create an instance of Postgresql from a dict
postgresql_from_dict = Postgresql.from_dict(postgresql_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


