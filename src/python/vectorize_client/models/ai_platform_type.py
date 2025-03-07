# coding: utf-8

"""
    Vectorize API (Beta)

    API for Vectorize services

    The version of the OpenAPI document: 0.0.1
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import json
from enum import Enum
from typing_extensions import Self


class AIPlatformType(str, Enum):
    """
    AIPlatformType
    """

    """
    allowed enum values
    """
    BEDROCK = 'BEDROCK'
    VERTEX = 'VERTEX'
    OPENAI = 'OPENAI'
    VOYAGE = 'VOYAGE'
    VECTORIZE = 'VECTORIZE'

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of AIPlatformType from a JSON string"""
        return cls(json.loads(json_str))


