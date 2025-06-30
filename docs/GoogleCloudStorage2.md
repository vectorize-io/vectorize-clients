# GoogleCloudStorage2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;GCS\&quot;) | 

## Example

```python
from vectorize_client.models.google_cloud_storage2 import GoogleCloudStorage2

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudStorage2 from a JSON string
google_cloud_storage2_instance = GoogleCloudStorage2.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudStorage2.to_json())

# convert the object into a dict
google_cloud_storage2_dict = google_cloud_storage2_instance.to_dict()
# create an instance of GoogleCloudStorage2 from a dict
google_cloud_storage2_from_dict = GoogleCloudStorage2.from_dict(google_cloud_storage2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


