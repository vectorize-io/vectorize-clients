# coding: utf-8

"""
    Vectorize API (Beta)

    API for Vectorize services

    The version of the OpenAPI document: 0.0.1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List
from vectorize_client.models.add_user_to_source_connector_request_selected_files_value import AddUserToSourceConnectorRequestSelectedFilesValue
from typing import Optional, Set
from typing_extensions import Self

class AddUserToSourceConnectorRequest(BaseModel):
    """
    AddUserToSourceConnectorRequest
    """ # noqa: E501
    user_id: StrictStr = Field(alias="userId")
    selected_files: Dict[str, AddUserToSourceConnectorRequestSelectedFilesValue] = Field(alias="selectedFiles")
    refresh_token: StrictStr = Field(alias="refreshToken")
    __properties: ClassVar[List[str]] = ["userId", "selectedFiles", "refreshToken"]

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
        """Create an instance of AddUserToSourceConnectorRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of each value in selected_files (dict)
        _field_dict = {}
        if self.selected_files:
            for _key_selected_files in self.selected_files:
                if self.selected_files[_key_selected_files]:
                    _field_dict[_key_selected_files] = self.selected_files[_key_selected_files].to_dict()
            _dict['selectedFiles'] = _field_dict
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of AddUserToSourceConnectorRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "userId": obj.get("userId"),
            "selectedFiles": dict(
                (_k, AddUserToSourceConnectorRequestSelectedFilesValue.from_dict(_v))
                for _k, _v in obj["selectedFiles"].items()
            )
            if obj.get("selectedFiles") is not None
            else None,
            "refreshToken": obj.get("refreshToken")
        })
        return _obj


