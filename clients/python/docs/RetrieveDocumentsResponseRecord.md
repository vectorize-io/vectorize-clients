# RetrieveDocumentsResponseRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **object** | Document retrieval results | [optional] 

## Example

```python
from vectorize_client.models.retrieve_documents_response_record import RetrieveDocumentsResponseRecord

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveDocumentsResponseRecord from a JSON string
retrieve_documents_response_record_instance = RetrieveDocumentsResponseRecord.from_json(json)
# print the JSON string representation of the object
print(RetrieveDocumentsResponseRecord.to_json())

# convert the object into a dict
retrieve_documents_response_record_dict = retrieve_documents_response_record_instance.to_dict()
# create an instance of RetrieveDocumentsResponseRecord from a dict
retrieve_documents_response_record_from_dict = RetrieveDocumentsResponseRecord.from_dict(retrieve_documents_response_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


