# GetPipelines400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**details** | **str** |  | [optional] 
**failed_updates** | **List[str]** |  | [optional] 
**successful_updates** | **List[str]** |  | [optional] 

## Example

```python
from vectorize_client.models.get_pipelines400_response import GetPipelines400Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPipelines400Response from a JSON string
get_pipelines400_response_instance = GetPipelines400Response.from_json(json)
# print the JSON string representation of the object
print(GetPipelines400Response.to_json())

# convert the object into a dict
get_pipelines400_response_dict = get_pipelines400_response_instance.to_dict()
# create an instance of GetPipelines400Response from a dict
get_pipelines400_response_from_dict = GetPipelines400Response.from_dict(get_pipelines400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


