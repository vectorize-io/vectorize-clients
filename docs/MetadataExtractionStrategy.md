# MetadataExtractionStrategy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schemas** | [**List[MetadataExtractionStrategySchema]**](MetadataExtractionStrategySchema.md) |  | [optional] 
**infer_schema** | **bool** |  | [optional] 

## Example

```python
from vectorize_client.models.metadata_extraction_strategy import MetadataExtractionStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataExtractionStrategy from a JSON string
metadata_extraction_strategy_instance = MetadataExtractionStrategy.from_json(json)
# print the JSON string representation of the object
print(MetadataExtractionStrategy.to_json())

# convert the object into a dict
metadata_extraction_strategy_dict = metadata_extraction_strategy_instance.to_dict()
# create an instance of MetadataExtractionStrategy from a dict
metadata_extraction_strategy_from_dict = MetadataExtractionStrategy.from_dict(metadata_extraction_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


