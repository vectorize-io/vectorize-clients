# RetrieveContextMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role** | **str** |  | 
**content** | **str** |  | 

## Example

```python
from vectorize_client.models.retrieve_context_message import RetrieveContextMessage

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveContextMessage from a JSON string
retrieve_context_message_instance = RetrieveContextMessage.from_json(json)
# print the JSON string representation of the object
print(RetrieveContextMessage.to_json())

# convert the object into a dict
retrieve_context_message_dict = retrieve_context_message_instance.to_dict()
# create an instance of RetrieveContextMessage from a dict
retrieve_context_message_from_dict = RetrieveContextMessage.from_dict(retrieve_context_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


