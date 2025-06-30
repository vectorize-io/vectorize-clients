# AmazonS3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;AWS_S3\&quot;) | 
**config** | [**AWSS3Config**](AWSS3Config.md) |  | 

## Example

```python
from vectorize_client.models.amazon_s3 import AmazonS3

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonS3 from a JSON string
amazon_s3_instance = AmazonS3.from_json(json)
# print the JSON string representation of the object
print(AmazonS3.to_json())

# convert the object into a dict
amazon_s3_dict = amazon_s3_instance.to_dict()
# create an instance of AmazonS3 from a dict
amazon_s3_from_dict = AmazonS3.from_dict(amazon_s3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


