# MetadataExtractionStrategySchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**var_schema** | **str** |  | 

## Example

```python
from vectorize_client.models.metadata_extraction_strategy_schema import MetadataExtractionStrategySchema

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataExtractionStrategySchema from a JSON string
metadata_extraction_strategy_schema_instance = MetadataExtractionStrategySchema.from_json(json)
# print the JSON string representation of the object
print(MetadataExtractionStrategySchema.to_json())

# convert the object into a dict
metadata_extraction_strategy_schema_dict = metadata_extraction_strategy_schema_instance.to_dict()
# create an instance of MetadataExtractionStrategySchema from a dict
metadata_extraction_strategy_schema_from_dict = MetadataExtractionStrategySchema.from_dict(metadata_extraction_strategy_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


