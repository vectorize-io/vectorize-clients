# ExtractionResultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ready** | **bool** |  | 
**data** | [**ExtractionResult**](ExtractionResult.md) |  | [optional] 

## Example

```python
from vectorize_client.models.extraction_result_response import ExtractionResultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractionResultResponse from a JSON string
extraction_result_response_instance = ExtractionResultResponse.from_json(json)
# print the JSON string representation of the object
print(ExtractionResultResponse.to_json())

# convert the object into a dict
extraction_result_response_dict = extraction_result_response_instance.to_dict()
# create an instance of ExtractionResultResponse from a dict
extraction_result_response_from_dict = ExtractionResultResponse.from_dict(extraction_result_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


