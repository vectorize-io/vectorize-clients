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
import type { AIPlatform } from './AIPlatform';
import {
    AIPlatformFromJSON,
    AIPlatformFromJSONTyped,
    AIPlatformToJSON,
    AIPlatformToJSONTyped,
} from './AIPlatform';

/**
 * 
 * @export
 * @interface GetAIPlatformConnectors200Response
 */
export interface GetAIPlatformConnectors200Response {
    /**
     * 
     * @type {Array<AIPlatform>}
     * @memberof GetAIPlatformConnectors200Response
     */
    aiPlatformConnectors: Array<AIPlatform>;
}

/**
 * Check if a given object implements the GetAIPlatformConnectors200Response interface.
 */
export function instanceOfGetAIPlatformConnectors200Response(value: object): value is GetAIPlatformConnectors200Response {
    if (!('aiPlatformConnectors' in value) || value['aiPlatformConnectors'] === undefined) return false;
    return true;
}

export function GetAIPlatformConnectors200ResponseFromJSON(json: any): GetAIPlatformConnectors200Response {
    return GetAIPlatformConnectors200ResponseFromJSONTyped(json, false);
}

export function GetAIPlatformConnectors200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAIPlatformConnectors200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'aiPlatformConnectors': ((json['aiPlatformConnectors'] as Array<any>).map(AIPlatformFromJSON)),
    };
}

export function GetAIPlatformConnectors200ResponseToJSON(json: any): GetAIPlatformConnectors200Response {
    return GetAIPlatformConnectors200ResponseToJSONTyped(json, false);
}

export function GetAIPlatformConnectors200ResponseToJSONTyped(value?: GetAIPlatformConnectors200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'aiPlatformConnectors': ((value['aiPlatformConnectors'] as Array<any>).map(AIPlatformToJSON)),
    };
}

