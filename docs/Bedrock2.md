# Bedrock2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;BEDROCK\&quot;) | 

## Example

```python
from vectorize_client.models.bedrock2 import Bedrock2

# TODO update the JSON string below
json = "{}"
# create an instance of Bedrock2 from a JSON string
bedrock2_instance = Bedrock2.from_json(json)
# print the JSON string representation of the object
print(Bedrock2.to_json())

# convert the object into a dict
bedrock2_dict = bedrock2_instance.to_dict()
# create an instance of Bedrock2 from a dict
bedrock2_from_dict = Bedrock2.from_dict(bedrock2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


