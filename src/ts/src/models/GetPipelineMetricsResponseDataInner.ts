/* tslint:disable */
/* eslint-disable */
/**
 * Vectorize API (Beta)
 * API documentation for Vectorize services
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
 * @interface GetPipelineMetricsResponseDataInner
 */
export interface GetPipelineMetricsResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof GetPipelineMetricsResponseDataInner
     */
    timestamp: string | null;
    /**
     * 
     * @type {number}
     * @memberof GetPipelineMetricsResponseDataInner
     */
    newObjects: number;
    /**
     * 
     * @type {number}
     * @memberof GetPipelineMetricsResponseDataInner
     */
    changedObjects: number;
    /**
     * 
     * @type {number}
     * @memberof GetPipelineMetricsResponseDataInner
     */
    deletedObjects: number;
}

/**
 * Check if a given object implements the GetPipelineMetricsResponseDataInner interface.
 */
export function instanceOfGetPipelineMetricsResponseDataInner(value: object): value is GetPipelineMetricsResponseDataInner {
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('newObjects' in value) || value['newObjects'] === undefined) return false;
    if (!('changedObjects' in value) || value['changedObjects'] === undefined) return false;
    if (!('deletedObjects' in value) || value['deletedObjects'] === undefined) return false;
    return true;
}

export function GetPipelineMetricsResponseDataInnerFromJSON(json: any): GetPipelineMetricsResponseDataInner {
    return GetPipelineMetricsResponseDataInnerFromJSONTyped(json, false);
}

export function GetPipelineMetricsResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPipelineMetricsResponseDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'newObjects': json['newObjects'],
        'changedObjects': json['changedObjects'],
        'deletedObjects': json['deletedObjects'],
    };
}

export function GetPipelineMetricsResponseDataInnerToJSON(json: any): GetPipelineMetricsResponseDataInner {
    return GetPipelineMetricsResponseDataInnerToJSONTyped(json, false);
}

export function GetPipelineMetricsResponseDataInnerToJSONTyped(value?: GetPipelineMetricsResponseDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'timestamp': value['timestamp'],
        'newObjects': value['newObjects'],
        'changedObjects': value['changedObjects'],
        'deletedObjects': value['deletedObjects'],
    };
}

