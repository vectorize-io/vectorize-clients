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
 * @interface GetPipelineEventsResponseDataInner
 */
export interface GetPipelineEventsResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetPipelineEventsResponseDataInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GetPipelineEventsResponseDataInner
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof GetPipelineEventsResponseDataInner
     */
    timestamp: string | null;
    /**
     * 
     * @type {{ [key: string]: any | null; }}
     * @memberof GetPipelineEventsResponseDataInner
     */
    details?: { [key: string]: any | null; };
    /**
     * 
     * @type {{ [key: string]: any | null; }}
     * @memberof GetPipelineEventsResponseDataInner
     */
    summary?: { [key: string]: any | null; };
}

/**
 * Check if a given object implements the GetPipelineEventsResponseDataInner interface.
 */
export function instanceOfGetPipelineEventsResponseDataInner(value: object): value is GetPipelineEventsResponseDataInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function GetPipelineEventsResponseDataInnerFromJSON(json: any): GetPipelineEventsResponseDataInner {
    return GetPipelineEventsResponseDataInnerFromJSONTyped(json, false);
}

export function GetPipelineEventsResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPipelineEventsResponseDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'timestamp': json['timestamp'],
        'details': json['details'] == null ? undefined : json['details'],
        'summary': json['summary'] == null ? undefined : json['summary'],
    };
}

export function GetPipelineEventsResponseDataInnerToJSON(json: any): GetPipelineEventsResponseDataInner {
    return GetPipelineEventsResponseDataInnerToJSONTyped(json, false);
}

export function GetPipelineEventsResponseDataInnerToJSONTyped(value?: GetPipelineEventsResponseDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
        'timestamp': value['timestamp'],
        'details': value['details'],
        'summary': value['summary'],
    };
}

