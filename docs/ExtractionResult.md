# ExtractionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | 
**chunks** | **List[str]** |  | [optional] 
**text** | **str** |  | [optional] 
**metadata** | **str** |  | [optional] 
**metadata_schema** | **str** |  | [optional] 
**chunks_metadata** | **List[str]** |  | [optional] 
**chunks_schema** | **List[str]** |  | [optional] 
**error** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.extraction_result import ExtractionResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractionResult from a JSON string
extraction_result_instance = ExtractionResult.from_json(json)
# print the JSON string representation of the object
print(ExtractionResult.to_json())

# convert the object into a dict
extraction_result_dict = extraction_result_instance.to_dict()
# create an instance of ExtractionResult from a dict
extraction_result_from_dict = ExtractionResult.from_dict(extraction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


