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

from pydantic import BaseModel, ConfigDict, Field
from typing import Any, ClassVar, Dict, List
from vectorize_client.models.ai_platform import AIPlatform
from typing import Optional, Set
from typing_extensions import Self

class GetAIPlatformConnectors200Response(BaseModel):
    """
    GetAIPlatformConnectors200Response
    """ # noqa: E501
    ai_platform_connectors: List[AIPlatform] = Field(alias="aiPlatformConnectors")
    __properties: ClassVar[List[str]] = ["aiPlatformConnectors"]

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
        """Create an instance of GetAIPlatformConnectors200Response from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each item in ai_platform_connectors (list)
        _items = []
        if self.ai_platform_connectors:
            for _item_ai_platform_connectors in self.ai_platform_connectors:
                if _item_ai_platform_connectors:
                    _items.append(_item_ai_platform_connectors.to_dict())
            _dict['aiPlatformConnectors'] = _items
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of GetAIPlatformConnectors200Response from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "aiPlatformConnectors": [AIPlatform.from_dict(_item) for _item in obj["aiPlatformConnectors"]] if obj.get("aiPlatformConnectors") is not None else None
        })
        return _obj


