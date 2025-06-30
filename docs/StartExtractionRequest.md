# StartExtractionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** |  | 
**type** | [**ExtractionType**](ExtractionType.md) |  | [optional] [default to ExtractionType.IRIS]
**chunking_strategy** | [**ExtractionChunkingStrategy**](ExtractionChunkingStrategy.md) |  | [optional] [default to ExtractionChunkingStrategy.MARKDOWN]
**chunk_size** | **float** |  | [optional] [default to 256]
**metadata** | [**MetadataExtractionStrategy**](MetadataExtractionStrategy.md) |  | [optional] 

## Example

```python
from vectorize_client.models.start_extraction_request import StartExtractionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartExtractionRequest from a JSON string
start_extraction_request_instance = StartExtractionRequest.from_json(json)
# print the JSON string representation of the object
print(StartExtractionRequest.to_json())

# convert the object into a dict
start_extraction_request_dict = start_extraction_request_instance.to_dict()
# create an instance of StartExtractionRequest from a dict
start_extraction_request_from_dict = StartExtractionRequest.from_dict(start_extraction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


