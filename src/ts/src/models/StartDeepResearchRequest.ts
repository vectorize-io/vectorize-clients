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
import type { N8NConfig } from './N8NConfig';
import {
    N8NConfigFromJSON,
    N8NConfigFromJSONTyped,
    N8NConfigToJSON,
    N8NConfigToJSONTyped,
} from './N8NConfig';

/**
 * 
 * @export
 * @interface StartDeepResearchRequest
 */
export interface StartDeepResearchRequest {
    /**
     * 
     * @type {string}
     * @memberof StartDeepResearchRequest
     */
    query: string;
    /**
     * 
     * @type {boolean}
     * @memberof StartDeepResearchRequest
     */
    webSearch?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StartDeepResearchRequest
     */
    schema?: string;
    /**
     * 
     * @type {N8NConfig}
     * @memberof StartDeepResearchRequest
     */
    n8n?: N8NConfig;
}

/**
 * Check if a given object implements the StartDeepResearchRequest interface.
 */
export function instanceOfStartDeepResearchRequest(value: object): value is StartDeepResearchRequest {
    if (!('query' in value) || value['query'] === undefined) return false;
    return true;
}

export function StartDeepResearchRequestFromJSON(json: any): StartDeepResearchRequest {
    return StartDeepResearchRequestFromJSONTyped(json, false);
}

export function StartDeepResearchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartDeepResearchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'query': json['query'],
        'webSearch': json['webSearch'] == null ? undefined : json['webSearch'],
        'schema': json['schema'] == null ? undefined : json['schema'],
        'n8n': json['n8n'] == null ? undefined : N8NConfigFromJSON(json['n8n']),
    };
}

export function StartDeepResearchRequestToJSON(json: any): StartDeepResearchRequest {
    return StartDeepResearchRequestToJSONTyped(json, false);
}

export function StartDeepResearchRequestToJSONTyped(value?: StartDeepResearchRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'query': value['query'],
        'webSearch': value['webSearch'],
        'schema': value['schema'],
        'n8n': N8NConfigToJSON(value['n8n']),
    };
}

