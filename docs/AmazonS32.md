# AmazonS32


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;AWS_S3\&quot;) | 

## Example

```python
from vectorize_client.models.amazon_s32 import AmazonS32

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonS32 from a JSON string
amazon_s32_instance = AmazonS32.from_json(json)
# print the JSON string representation of the object
print(AmazonS32.to_json())

# convert the object into a dict
amazon_s32_dict = amazon_s32_instance.to_dict()
# create an instance of AmazonS32 from a dict
amazon_s32_from_dict = AmazonS32.from_dict(amazon_s32_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


