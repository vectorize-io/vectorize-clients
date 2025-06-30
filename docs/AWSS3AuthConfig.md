# AWSS3AuthConfig

Authentication configuration for Amazon S3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**access_key** | **str** | Access Key. Example: Enter Access Key | 
**secret_key** | **str** | Secret Key. Example: Enter Secret Key | 
**bucket_name** | **str** | Bucket Name. Example: Enter your S3 Bucket Name | 
**endpoint** | **str** | Endpoint. Example: Enter Endpoint URL | [optional] 
**region** | **str** | Region. Example: Region Name | [optional] 
**archiver** | **bool** | Allow as archive destination | [default to False]

## Example

```python
from vectorize_client.models.awss3_auth_config import AWSS3AuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AWSS3AuthConfig from a JSON string
awss3_auth_config_instance = AWSS3AuthConfig.from_json(json)
# print the JSON string representation of the object
print(AWSS3AuthConfig.to_json())

# convert the object into a dict
awss3_auth_config_dict = awss3_auth_config_instance.to_dict()
# create an instance of AWSS3AuthConfig from a dict
awss3_auth_config_from_dict = AWSS3AuthConfig.from_dict(awss3_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


