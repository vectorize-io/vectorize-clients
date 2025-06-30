# CAPELLAConfig

Configuration for Couchbase Capella connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Bucket Name. Example: Enter bucket name | 
**scope** | **str** | Scope Name. Example: Enter scope name | 
**collection** | **str** | Collection Name. Example: Enter collection name | 
**index** | **str** | Search Index Name. Example: Enter search index name | 

## Example

```python
from vectorize_client.models.capella_config import CAPELLAConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CAPELLAConfig from a JSON string
capella_config_instance = CAPELLAConfig.from_json(json)
# print the JSON string representation of the object
print(CAPELLAConfig.to_json())

# convert the object into a dict
capella_config_dict = capella_config_instance.to_dict()
# create an instance of CAPELLAConfig from a dict
capella_config_from_dict = CAPELLAConfig.from_dict(capella_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


