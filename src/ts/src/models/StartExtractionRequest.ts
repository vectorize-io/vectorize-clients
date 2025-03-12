/* tslint:disable */
/* eslint-disable */
/**
 * Vectorize API (Beta)
 * API for Vectorize services
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { MetadataExtractionStrategy } from './MetadataExtractionStrategy';
import {
    MetadataExtractionStrategyFromJSON,
    MetadataExtractionStrategyFromJSONTyped,
    MetadataExtractionStrategyToJSON,
    MetadataExtractionStrategyToJSONTyped,
} from './MetadataExtractionStrategy';
import type { ExtractionType } from './ExtractionType';
import {
    ExtractionTypeFromJSON,
    ExtractionTypeFromJSONTyped,
    ExtractionTypeToJSON,
    ExtractionTypeToJSONTyped,
} from './ExtractionType';
import type { ExtractionChunkingStrategy } from './ExtractionChunkingStrategy';
import {
    ExtractionChunkingStrategyFromJSON,
    ExtractionChunkingStrategyFromJSONTyped,
    ExtractionChunkingStrategyToJSON,
    ExtractionChunkingStrategyToJSONTyped,
} from './ExtractionChunkingStrategy';

/**
 * 
 * @export
 * @interface StartExtractionRequest
 */
export interface StartExtractionRequest {
    /**
     * 
     * @type {string}
     * @memberof StartExtractionRequest
     */
    fileId: string;
    /**
     * 
     * @type {ExtractionType}
     * @memberof StartExtractionRequest
     */
    type?: ExtractionType;
    /**
     * 
     * @type {ExtractionChunkingStrategy}
     * @memberof StartExtractionRequest
     */
    chunkingStrategy?: ExtractionChunkingStrategy;
    /**
     * 
     * @type {number}
     * @memberof StartExtractionRequest
     */
    chunkSize?: number;
    /**
     * 
     * @type {MetadataExtractionStrategy}
     * @memberof StartExtractionRequest
     */
    metadata?: MetadataExtractionStrategy;
}



/**
 * Check if a given object implements the StartExtractionRequest interface.
 */
export function instanceOfStartExtractionRequest(value: object): value is StartExtractionRequest {
    if (!('fileId' in value) || value['fileId'] === undefined) return false;
    return true;
}

export function StartExtractionRequestFromJSON(json: any): StartExtractionRequest {
    return StartExtractionRequestFromJSONTyped(json, false);
}

export function StartExtractionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartExtractionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'fileId': json['fileId'],
        'type': json['type'] == null ? undefined : ExtractionTypeFromJSON(json['type']),
        'chunkingStrategy': json['chunkingStrategy'] == null ? undefined : ExtractionChunkingStrategyFromJSON(json['chunkingStrategy']),
        'chunkSize': json['chunkSize'] == null ? undefined : json['chunkSize'],
        'metadata': json['metadata'] == null ? undefined : MetadataExtractionStrategyFromJSON(json['metadata']),
    };
}

export function StartExtractionRequestToJSON(json: any): StartExtractionRequest {
    return StartExtractionRequestToJSONTyped(json, false);
}

export function StartExtractionRequestToJSONTyped(value?: StartExtractionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileId': value['fileId'],
        'type': ExtractionTypeToJSON(value['type']),
        'chunkingStrategy': ExtractionChunkingStrategyToJSON(value['chunkingStrategy']),
        'chunkSize': value['chunkSize'],
        'metadata': MetadataExtractionStrategyToJSON(value['metadata']),
    };
}

