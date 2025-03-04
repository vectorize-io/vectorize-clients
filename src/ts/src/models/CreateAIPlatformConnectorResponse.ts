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
import type { CreateSourceConnectorResponseConnectorsInner } from './CreateSourceConnectorResponseConnectorsInner';
import {
    CreateSourceConnectorResponseConnectorsInnerFromJSON,
    CreateSourceConnectorResponseConnectorsInnerFromJSONTyped,
    CreateSourceConnectorResponseConnectorsInnerToJSON,
    CreateSourceConnectorResponseConnectorsInnerToJSONTyped,
} from './CreateSourceConnectorResponseConnectorsInner';

/**
 * 
 * @export
 * @interface CreateAIPlatformConnectorResponse
 */
export interface CreateAIPlatformConnectorResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateAIPlatformConnectorResponse
     */
    message: string;
    /**
     * 
     * @type {Array<CreateSourceConnectorResponseConnectorsInner>}
     * @memberof CreateAIPlatformConnectorResponse
     */
    connectors: Array<CreateSourceConnectorResponseConnectorsInner>;
}

/**
 * Check if a given object implements the CreateAIPlatformConnectorResponse interface.
 */
export function instanceOfCreateAIPlatformConnectorResponse(value: object): value is CreateAIPlatformConnectorResponse {
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('connectors' in value) || value['connectors'] === undefined) return false;
    return true;
}

export function CreateAIPlatformConnectorResponseFromJSON(json: any): CreateAIPlatformConnectorResponse {
    return CreateAIPlatformConnectorResponseFromJSONTyped(json, false);
}

export function CreateAIPlatformConnectorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAIPlatformConnectorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
        'connectors': ((json['connectors'] as Array<any>).map(CreateSourceConnectorResponseConnectorsInnerFromJSON)),
    };
}

export function CreateAIPlatformConnectorResponseToJSON(json: any): CreateAIPlatformConnectorResponse {
    return CreateAIPlatformConnectorResponseToJSONTyped(json, false);
}

export function CreateAIPlatformConnectorResponseToJSONTyped(value?: CreateAIPlatformConnectorResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'connectors': ((value['connectors'] as Array<any>).map(CreateSourceConnectorResponseConnectorsInnerToJSON)),
    };
}

