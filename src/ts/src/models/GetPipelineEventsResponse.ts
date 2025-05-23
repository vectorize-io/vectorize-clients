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
import type { PipelineEvents } from './PipelineEvents';
import {
    PipelineEventsFromJSON,
    PipelineEventsFromJSONTyped,
    PipelineEventsToJSON,
    PipelineEventsToJSONTyped,
} from './PipelineEvents';

/**
 * 
 * @export
 * @interface GetPipelineEventsResponse
 */
export interface GetPipelineEventsResponse {
    /**
     * 
     * @type {string}
     * @memberof GetPipelineEventsResponse
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof GetPipelineEventsResponse
     */
    nextToken?: string;
    /**
     * 
     * @type {Array<PipelineEvents>}
     * @memberof GetPipelineEventsResponse
     */
    data: Array<PipelineEvents>;
}

/**
 * Check if a given object implements the GetPipelineEventsResponse interface.
 */
export function instanceOfGetPipelineEventsResponse(value: object): value is GetPipelineEventsResponse {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function GetPipelineEventsResponseFromJSON(json: any): GetPipelineEventsResponse {
    return GetPipelineEventsResponseFromJSONTyped(json, false);
}

export function GetPipelineEventsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPipelineEventsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'nextToken': json['nextToken'] == null ? undefined : json['nextToken'],
        'data': ((json['data'] as Array<any>).map(PipelineEventsFromJSON)),
    };
}

export function GetPipelineEventsResponseToJSON(json: any): GetPipelineEventsResponse {
    return GetPipelineEventsResponseToJSONTyped(json, false);
}

export function GetPipelineEventsResponseToJSONTyped(value?: GetPipelineEventsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'nextToken': value['nextToken'],
        'data': ((value['data'] as Array<any>).map(PipelineEventsToJSON)),
    };
}

