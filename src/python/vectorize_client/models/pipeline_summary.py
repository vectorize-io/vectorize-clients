# coding: utf-8

"""
    Vectorize API (Beta)

    API documentation for Vectorize services

    The version of the OpenAPI document: 0.0.1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictFloat, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from vectorize_client.models.ai_platform import AIPlatform
from vectorize_client.models.destination_connector import DestinationConnector
from vectorize_client.models.source_connector import SourceConnector
from typing import Optional, Set
from typing_extensions import Self

class PipelineSummary(BaseModel):
    """
    PipelineSummary
    """ # noqa: E501
    id: StrictStr
    name: StrictStr
    document_count: Union[StrictFloat, StrictInt] = Field(alias="documentCount")
    source_connector_auth_ids: List[StrictStr] = Field(alias="sourceConnectorAuthIds")
    destination_connector_auth_ids: List[StrictStr] = Field(alias="destinationConnectorAuthIds")
    ai_platform_auth_ids: List[StrictStr] = Field(alias="aiPlatformAuthIds")
    source_connector_types: List[StrictStr] = Field(alias="sourceConnectorTypes")
    destination_connector_types: List[StrictStr] = Field(alias="destinationConnectorTypes")
    ai_platform_types: List[StrictStr] = Field(alias="aiPlatformTypes")
    created_at: Optional[StrictStr] = Field(alias="createdAt")
    created_by: StrictStr = Field(alias="createdBy")
    status: Optional[StrictStr] = None
    config_doc: Optional[Dict[str, Any]] = Field(default=None, alias="configDoc")
    source_connectors: List[SourceConnector] = Field(alias="sourceConnectors")
    destination_connectors: List[DestinationConnector] = Field(alias="destinationConnectors")
    ai_platforms: List[AIPlatform] = Field(alias="aiPlatforms")
    __properties: ClassVar[List[str]] = ["id", "name", "documentCount", "sourceConnectorAuthIds", "destinationConnectorAuthIds", "aiPlatformAuthIds", "sourceConnectorTypes", "destinationConnectorTypes", "aiPlatformTypes", "createdAt", "createdBy", "status", "configDoc", "sourceConnectors", "destinationConnectors", "aiPlatforms"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of PipelineSummary from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in source_connectors (list)
        _items = []
        if self.source_connectors:
            for _item_source_connectors in self.source_connectors:
                if _item_source_connectors:
                    _items.append(_item_source_connectors.to_dict())
            _dict['sourceConnectors'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in destination_connectors (list)
        _items = []
        if self.destination_connectors:
            for _item_destination_connectors in self.destination_connectors:
                if _item_destination_connectors:
                    _items.append(_item_destination_connectors.to_dict())
            _dict['destinationConnectors'] = _items
        # override the default output from pydantic by calling `to_dict()` of each item in ai_platforms (list)
        _items = []
        if self.ai_platforms:
            for _item_ai_platforms in self.ai_platforms:
                if _item_ai_platforms:
                    _items.append(_item_ai_platforms.to_dict())
            _dict['aiPlatforms'] = _items
        # set to None if created_at (nullable) is None
        # and model_fields_set contains the field
        if self.created_at is None and "created_at" in self.model_fields_set:
            _dict['createdAt'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of PipelineSummary from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "name": obj.get("name"),
            "documentCount": obj.get("documentCount"),
            "sourceConnectorAuthIds": obj.get("sourceConnectorAuthIds"),
            "destinationConnectorAuthIds": obj.get("destinationConnectorAuthIds"),
            "aiPlatformAuthIds": obj.get("aiPlatformAuthIds"),
            "sourceConnectorTypes": obj.get("sourceConnectorTypes"),
            "destinationConnectorTypes": obj.get("destinationConnectorTypes"),
            "aiPlatformTypes": obj.get("aiPlatformTypes"),
            "createdAt": obj.get("createdAt"),
            "createdBy": obj.get("createdBy"),
            "status": obj.get("status"),
            "configDoc": obj.get("configDoc"),
            "sourceConnectors": [SourceConnector.from_dict(_item) for _item in obj["sourceConnectors"]] if obj.get("sourceConnectors") is not None else None,
            "destinationConnectors": [DestinationConnector.from_dict(_item) for _item in obj["destinationConnectors"]] if obj.get("destinationConnectors") is not None else None,
            "aiPlatforms": [AIPlatform.from_dict(_item) for _item in obj["aiPlatforms"]] if obj.get("aiPlatforms") is not None else None
        })
        return _obj


