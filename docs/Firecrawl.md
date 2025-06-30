# Firecrawl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;FIRECRAWL\&quot;) | 
**config** | [**FIRECRAWLConfig**](FIRECRAWLConfig.md) |  | 

## Example

```python
from vectorize_client.models.firecrawl import Firecrawl

# TODO update the JSON string below
json = "{}"
# create an instance of Firecrawl from a JSON string
firecrawl_instance = Firecrawl.from_json(json)
# print the JSON string representation of the object
print(Firecrawl.to_json())

# convert the object into a dict
firecrawl_dict = firecrawl_instance.to_dict()
# create an instance of Firecrawl from a dict
firecrawl_from_dict = Firecrawl.from_dict(firecrawl_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


