# BEDROCKAuthConfig

Authentication configuration for Amazon Bedrock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Amazon Bedrock integration | 
**access_key** | **str** | Access Key. Example: Enter your Amazon Bedrock Access Key | 
**key** | **str** | Secret Key. Example: Enter your Amazon Bedrock Secret Key | 
**region** | **str** | Region. Example: Region Name | 

## Example

```python
from vectorize_client.models.bedrock_auth_config import BEDROCKAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BEDROCKAuthConfig from a JSON string
bedrock_auth_config_instance = BEDROCKAuthConfig.from_json(json)
# print the JSON string representation of the object
print(BEDROCKAuthConfig.to_json())

# convert the object into a dict
bedrock_auth_config_dict = bedrock_auth_config_instance.to_dict()
# create an instance of BEDROCKAuthConfig from a dict
bedrock_auth_config_from_dict = BEDROCKAuthConfig.from_dict(bedrock_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


