# VERTEXAuthConfig

Authentication configuration for Google Vertex AI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name. Example: Enter a descriptive name for your Google Vertex AI integration | 
**key** | **str** | Service Account Json. Example: Enter the contents of your Google Vertex AI Service Account JSON file | 
**region** | **str** | Region. Example: Region Name, e.g. us-central1 | 

## Example

```python
from vectorize_client.models.vertex_auth_config import VERTEXAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VERTEXAuthConfig from a JSON string
vertex_auth_config_instance = VERTEXAuthConfig.from_json(json)
# print the JSON string representation of the object
print(VERTEXAuthConfig.to_json())

# convert the object into a dict
vertex_auth_config_dict = vertex_auth_config_instance.to_dict()
# create an instance of VERTEXAuthConfig from a dict
vertex_auth_config_from_dict = VERTEXAuthConfig.from_dict(vertex_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


