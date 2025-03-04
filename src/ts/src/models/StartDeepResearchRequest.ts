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
import type { StartDeepResearchRequestN8n } from './StartDeepResearchRequestN8n';
import {
    StartDeepResearchRequestN8nFromJSON,
    StartDeepResearchRequestN8nFromJSONTyped,
    StartDeepResearchRequestN8nToJSON,
    StartDeepResearchRequestN8nToJSONTyped,
} from './StartDeepResearchRequestN8n';

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
     * @type {StartDeepResearchRequestN8n}
     * @memberof StartDeepResearchRequest
     */
    n8n?: StartDeepResearchRequestN8n;
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
        'n8n': json['n8n'] == null ? undefined : StartDeepResearchRequestN8nFromJSON(json['n8n']),
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
        'n8n': StartDeepResearchRequestN8nToJSON(value['n8n']),
    };
}

