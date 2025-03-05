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
 * @interface StartPipelineResponse
 */
export interface StartPipelineResponse {
    /**
     * 
     * @type {string}
     * @memberof StartPipelineResponse
     */
    message: string;
}

/**
 * Check if a given object implements the StartPipelineResponse interface.
 */
export function instanceOfStartPipelineResponse(value: object): value is StartPipelineResponse {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function StartPipelineResponseFromJSON(json: any): StartPipelineResponse {
    return StartPipelineResponseFromJSONTyped(json, false);
}

export function StartPipelineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartPipelineResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function StartPipelineResponseToJSON(json: any): StartPipelineResponse {
    return StartPipelineResponseToJSONTyped(json, false);
}

export function StartPipelineResponseToJSONTyped(value?: StartPipelineResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

