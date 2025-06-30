# Firecrawl2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;FIRECRAWL\&quot;) | 

## Example

```python
from vectorize_client.models.firecrawl2 import Firecrawl2

# TODO update the JSON string below
json = "{}"
# create an instance of Firecrawl2 from a JSON string
firecrawl2_instance = Firecrawl2.from_json(json)
# print the JSON string representation of the object
print(Firecrawl2.to_json())

# convert the object into a dict
firecrawl2_dict = firecrawl2_instance.to_dict()
# create an instance of Firecrawl2 from a dict
firecrawl2_from_dict = Firecrawl2.from_dict(firecrawl2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


