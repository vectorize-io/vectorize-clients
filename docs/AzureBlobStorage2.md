# AzureBlobStorage2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the connector | 
**type** | **str** | Connector type (must be \&quot;AZURE_BLOB\&quot;) | 

## Example

```python
from vectorize_client.models.azure_blob_storage2 import AzureBlobStorage2

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobStorage2 from a JSON string
azure_blob_storage2_instance = AzureBlobStorage2.from_json(json)
# print the JSON string representation of the object
print(AzureBlobStorage2.to_json())

# convert the object into a dict
azure_blob_storage2_dict = azure_blob_storage2_instance.to_dict()
# create an instance of AzureBlobStorage2 from a dict
azure_blob_storage2_from_dict = AzureBlobStorage2.from_dict(azure_blob_storage2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


