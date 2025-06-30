# Document


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relevancy** | **float** |  | 
**id** | **str** |  | 
**text** | **str** |  | 
**chunk_id** | **str** |  | 
**total_chunks** | **str** |  | 
**origin** | **str** |  | 
**origin_id** | **str** |  | 
**similarity** | **float** |  | 
**source** | **str** |  | 
**unique_source** | **str** |  | 
**source_display_name** | **str** |  | 
**pipeline_id** | **str** |  | [optional] 
**org_id** | **str** |  | [optional] 

## Example

```python
from vectorize_client.models.document import Document

# TODO update the JSON string below
json = "{}"
# create an instance of Document from a JSON string
document_instance = Document.from_json(json)
# print the JSON string representation of the object
print(Document.to_json())

# convert the object into a dict
document_dict = document_instance.to_dict()
# create an instance of Document from a dict
document_from_dict = Document.from_dict(document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


