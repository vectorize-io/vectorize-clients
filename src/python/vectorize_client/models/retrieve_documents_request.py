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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional, Union
from typing_extensions import Annotated
from vectorize_client.models.advanced_query import AdvancedQuery
from vectorize_client.models.retrieve_context import RetrieveContext
from typing import Optional, Set
from typing_extensions import Self

class RetrieveDocumentsRequest(BaseModel):
    """
    RetrieveDocumentsRequest
    """ # noqa: E501
    question: StrictStr
    num_results: Union[Annotated[float, Field(strict=True, ge=1)], Annotated[int, Field(strict=True, ge=1)]] = Field(alias="numResults")
    rerank: Optional[StrictBool] = True
    metadata_filters: Optional[List[Dict[str, Any]]] = Field(default=None, alias="metadata-filters")
    context: Optional[RetrieveContext] = None
    advanced_query: Optional[AdvancedQuery] = Field(default=None, alias="advanced-query")
    __properties: ClassVar[List[str]] = ["question", "numResults", "rerank", "metadata-filters", "context", "advanced-query"]

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
        """Create an instance of RetrieveDocumentsRequest from a JSON string"""
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
        # override the default output from pydantic by calling `to_dict()` of context
        if self.context:
            _dict['context'] = self.context.to_dict()
        # override the default output from pydantic by calling `to_dict()` of advanced_query
        if self.advanced_query:
            _dict['advanced-query'] = self.advanced_query.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of RetrieveDocumentsRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "question": obj.get("question"),
            "numResults": obj.get("numResults"),
            "rerank": obj.get("rerank") if obj.get("rerank") is not None else True,
            "metadata-filters": obj.get("metadata-filters"),
            "context": RetrieveContext.from_dict(obj["context"]) if obj.get("context") is not None else None,
            "advanced-query": AdvancedQuery.from_dict(obj["advanced-query"]) if obj.get("advanced-query") is not None else None
        })
        return _obj


