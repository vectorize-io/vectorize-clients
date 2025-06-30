# RetrieveDocumentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question** | **str** |  | 
**num_results** | **float** |  | 
**rerank** | **bool** |  | [optional] [default to True]
**metadata_filters** | **List[Dict[str, Optional[object]]]** |  | [optional] 
**context** | [**RetrieveContext**](RetrieveContext.md) |  | [optional] 
**advanced_query** | [**AdvancedQuery**](AdvancedQuery.md) |  | [optional] 

## Example

```python
from vectorize_client.models.retrieve_documents_request import RetrieveDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveDocumentsRequest from a JSON string
retrieve_documents_request_instance = RetrieveDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(RetrieveDocumentsRequest.to_json())

# convert the object into a dict
retrieve_documents_request_dict = retrieve_documents_request_instance.to_dict()
# create an instance of RetrieveDocumentsRequest from a dict
retrieve_documents_request_from_dict = RetrieveDocumentsRequest.from_dict(retrieve_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


