# INTERCOMConfig

Configuration for Intercom connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **date** | Created After. Filter for conversation created after this date. Example: Enter a date: Example 2012-12-31 | 
**updated_at** | **date** | Updated After. Filter for conversation updated after this date. Example: Enter a date: Example 2012-12-31 | [optional] 
**state** | **List[str]** | State | [optional] 

## Example

```python
from vectorize_client.models.intercom_config import INTERCOMConfig

# TODO update the JSON string below
json = "{}"
# create an instance of INTERCOMConfig from a JSON string
intercom_config_instance = INTERCOMConfig.from_json(json)
# print the JSON string representation of the object
print(INTERCOMConfig.to_json())

# convert the object into a dict
intercom_config_dict = intercom_config_instance.to_dict()
# create an instance of INTERCOMConfig from a dict
intercom_config_from_dict = INTERCOMConfig.from_dict(intercom_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


