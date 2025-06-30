# Elastic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;ELASTIC\&quot;) | 
**config** | [**ELASTICConfig**](ELASTICConfig.md) |  | 

## Example

```python
from vectorize_client.models.elastic import Elastic

# TODO update the JSON string below
json = "{}"
# create an instance of Elastic from a JSON string
elastic_instance = Elastic.from_json(json)
# print the JSON string representation of the object
print(Elastic.to_json())

# convert the object into a dict
elastic_dict = elastic_instance.to_dict()
# create an instance of Elastic from a dict
elastic_from_dict = Elastic.from_dict(elastic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


