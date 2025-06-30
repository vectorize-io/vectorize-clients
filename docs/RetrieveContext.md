# RetrieveContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[RetrieveContextMessage]**](RetrieveContextMessage.md) |  | 

## Example

```python
from vectorize_client.models.retrieve_context import RetrieveContext

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveContext from a JSON string
retrieve_context_instance = RetrieveContext.from_json(json)
# print the JSON string representation of the object
print(RetrieveContext.to_json())

# convert the object into a dict
retrieve_context_dict = retrieve_context_instance.to_dict()
# create an instance of RetrieveContext from a dict
retrieve_context_from_dict = RetrieveContext.from_dict(retrieve_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


