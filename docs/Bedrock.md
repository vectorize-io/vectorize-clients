# Bedrock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;BEDROCK\&quot;) | 
**config** | [**BEDROCKAuthConfig**](BEDROCKAuthConfig.md) |  | 

## Example

```python
from vectorize_client.models.bedrock import Bedrock

# TODO update the JSON string below
json = "{}"
# create an instance of Bedrock from a JSON string
bedrock_instance = Bedrock.from_json(json)
# print the JSON string representation of the object
print(Bedrock.to_json())

# convert the object into a dict
bedrock_dict = bedrock_instance.to_dict()
# create an instance of Bedrock from a dict
bedrock_from_dict = Bedrock.from_dict(bedrock_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


