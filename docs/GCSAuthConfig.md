# GCSAuthConfig

Authentication configuration for GCP Cloud Storage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name | 
**service_account_json** | **str** | Service Account JSON. Example: Enter the JSON key file for the service account | 
**bucket_name** | **str** | Bucket. Example: Enter bucket name | 

## Example

```python
from vectorize_client.models.gcs_auth_config import GCSAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GCSAuthConfig from a JSON string
gcs_auth_config_instance = GCSAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GCSAuthConfig.to_json())

# convert the object into a dict
gcs_auth_config_dict = gcs_auth_config_instance.to_dict()
# create an instance of GCSAuthConfig from a dict
gcs_auth_config_from_dict = GCSAuthConfig.from_dict(gcs_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


