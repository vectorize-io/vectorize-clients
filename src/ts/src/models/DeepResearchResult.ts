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
/**
 * 
 * @export
 * @interface DeepResearchResult
 */
export interface DeepResearchResult {
    /**
     * 
     * @type {boolean}
     * @memberof DeepResearchResult
     */
    success: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DeepResearchResult
     */
    events?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DeepResearchResult
     */
    markdown?: string;
    /**
     * 
     * @type {string}
     * @memberof DeepResearchResult
     */
    error?: string;
}

/**
 * Check if a given object implements the DeepResearchResult interface.
 */
export function instanceOfDeepResearchResult(value: object): value is DeepResearchResult {
    if (!('success' in value) || value['success'] === undefined) return false;
    return true;
}

export function DeepResearchResultFromJSON(json: any): DeepResearchResult {
    return DeepResearchResultFromJSONTyped(json, false);
}

export function DeepResearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeepResearchResult {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'events': json['events'] == null ? undefined : json['events'],
        'markdown': json['markdown'] == null ? undefined : json['markdown'],
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function DeepResearchResultToJSON(json: any): DeepResearchResult {
    return DeepResearchResultToJSONTyped(json, false);
}

export function DeepResearchResultToJSONTyped(value?: DeepResearchResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'events': value['events'],
        'markdown': value['markdown'],
        'error': value['error'],
    };
}

