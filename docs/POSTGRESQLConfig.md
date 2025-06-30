# POSTGRESQLConfig

Configuration for PostgreSQL connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table** | **str** | Table Name. Example: Enter &lt;table name&gt; or &lt;schema&gt;.&lt;table name&gt; | 

## Example

```python
from vectorize_client.models.postgresql_config import POSTGRESQLConfig

# TODO update the JSON string below
json = "{}"
# create an instance of POSTGRESQLConfig from a JSON string
postgresql_config_instance = POSTGRESQLConfig.from_json(json)
# print the JSON string representation of the object
print(POSTGRESQLConfig.to_json())

# convert the object into a dict
postgresql_config_dict = postgresql_config_instance.to_dict()
# create an instance of POSTGRESQLConfig from a dict
postgresql_config_from_dict = POSTGRESQLConfig.from_dict(postgresql_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


