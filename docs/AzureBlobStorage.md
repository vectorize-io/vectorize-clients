# AzureBlobStorage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the connector | 
**type** | **str** | Connector type (must be \&quot;AZURE_BLOB\&quot;) | 
**config** | [**AZUREBLOBConfig**](AZUREBLOBConfig.md) |  | 

## Example

```python
from vectorize_client.models.azure_blob_storage import AzureBlobStorage

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlobStorage from a JSON string
azure_blob_storage_instance = AzureBlobStorage.from_json(json)
# print the JSON string representation of the object
print(AzureBlobStorage.to_json())

# convert the object into a dict
azure_blob_storage_dict = azure_blob_storage_instance.to_dict()
# create an instance of AzureBlobStorage from a dict
azure_blob_storage_from_dict = AzureBlobStorage.from_dict(azure_blob_storage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


