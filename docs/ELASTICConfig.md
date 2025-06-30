# ELASTICConfig

Configuration for Elasticsearch connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **str** | Index Name. Example: Enter index name | 

## Example

```python
from vectorize_client.models.elastic_config import ELASTICConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ELASTICConfig from a JSON string
elastic_config_instance = ELASTICConfig.from_json(json)
# print the JSON string representation of the object
print(ELASTICConfig.to_json())

# convert the object into a dict
elastic_config_dict = elastic_config_instance.to_dict()
# create an instance of ELASTICConfig from a dict
elastic_config_from_dict = ELASTICConfig.from_dict(elastic_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


