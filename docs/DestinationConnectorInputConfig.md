# DestinationConnectorInputConfig

Configuration specific to the connector type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Bucket Name. Example: Enter bucket name | 
**scope** | **str** | Scope Name. Example: Enter scope name | 
**collection** | **str** | Collection Name. Example: Enter collection name | 
**index** | **str** | Index Name. Example: Enter index name | 
**namespace** | **str** | Namespace. Example: Enter namespace name | 
**table** | **str** | Table Name. Example: Enter &lt;table name&gt; or &lt;schema&gt;.&lt;table name&gt; | 

## Example

```python
from vectorize_client.models.destination_connector_input_config import DestinationConnectorInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationConnectorInputConfig from a JSON string
destination_connector_input_config_instance = DestinationConnectorInputConfig.from_json(json)
# print the JSON string representation of the object
print(DestinationConnectorInputConfig.to_json())

# convert the object into a dict
destination_connector_input_config_dict = destination_connector_input_config_instance.to_dict()
# create an instance of DestinationConnectorInputConfig from a dict
destination_connector_input_config_from_dict = DestinationConnectorInputConfig.from_dict(destination_connector_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


