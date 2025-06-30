# RetrieveDocumentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | **str** |  | 
**documents** | [**List[Document]**](Document.md) |  | 
**average_relevancy** | **float** |  | 
**ndcg** | **float** |  | 

## Example

```python
from vectorize_client.models.retrieve_documents_response import RetrieveDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveDocumentsResponse from a JSON string
retrieve_documents_response_instance = RetrieveDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(RetrieveDocumentsResponse.to_json())

# convert the object into a dict
retrieve_documents_response_dict = retrieve_documents_response_instance.to_dict()
# create an instance of RetrieveDocumentsResponse from a dict
retrieve_documents_response_from_dict = RetrieveDocumentsResponse.from_dict(retrieve_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


