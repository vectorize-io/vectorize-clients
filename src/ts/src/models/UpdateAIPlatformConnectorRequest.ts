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
import type { UpdateAIPlatformConnectorRequestData } from './UpdateAIPlatformConnectorRequestData';
import {
    UpdateAIPlatformConnectorRequestDataFromJSON,
    UpdateAIPlatformConnectorRequestDataFromJSONTyped,
    UpdateAIPlatformConnectorRequestDataToJSON,
    UpdateAIPlatformConnectorRequestDataToJSONTyped,
} from './UpdateAIPlatformConnectorRequestData';

/**
 * 
 * @export
 * @interface UpdateAIPlatformConnectorRequest
 */
export interface UpdateAIPlatformConnectorRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateAIPlatformConnectorRequest
     */
    message: string;
    /**
     * 
     * @type {UpdateAIPlatformConnectorRequestData}
     * @memberof UpdateAIPlatformConnectorRequest
     */
    data: UpdateAIPlatformConnectorRequestData;
}

/**
 * Check if a given object implements the UpdateAIPlatformConnectorRequest interface.
 */
export function instanceOfUpdateAIPlatformConnectorRequest(value: object): value is UpdateAIPlatformConnectorRequest {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UpdateAIPlatformConnectorRequestFromJSON(json: any): UpdateAIPlatformConnectorRequest {
    return UpdateAIPlatformConnectorRequestFromJSONTyped(json, false);
}

export function UpdateAIPlatformConnectorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAIPlatformConnectorRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'data': UpdateAIPlatformConnectorRequestDataFromJSON(json['data']),
    };
}

export function UpdateAIPlatformConnectorRequestToJSON(json: any): UpdateAIPlatformConnectorRequest {
    return UpdateAIPlatformConnectorRequestToJSONTyped(json, false);
}

export function UpdateAIPlatformConnectorRequestToJSONTyped(value?: UpdateAIPlatformConnectorRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'data': UpdateAIPlatformConnectorRequestDataToJSON(value['data']),
    };
}

