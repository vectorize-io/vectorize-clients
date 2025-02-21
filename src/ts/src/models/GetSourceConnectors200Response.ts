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
import type { SourceConnector } from './SourceConnector';
import {
    SourceConnectorFromJSON,
    SourceConnectorFromJSONTyped,
    SourceConnectorToJSON,
    SourceConnectorToJSONTyped,
} from './SourceConnector';

/**
 * 
 * @export
 * @interface GetSourceConnectors200Response
 */
export interface GetSourceConnectors200Response {
    /**
     * 
     * @type {Array<SourceConnector>}
     * @memberof GetSourceConnectors200Response
     */
    sourceConnectors: Array<SourceConnector>;
}

/**
 * Check if a given object implements the GetSourceConnectors200Response interface.
 */
export function instanceOfGetSourceConnectors200Response(value: object): value is GetSourceConnectors200Response {
    if (!('sourceConnectors' in value) || value['sourceConnectors'] === undefined) return false;
    return true;
}

export function GetSourceConnectors200ResponseFromJSON(json: any): GetSourceConnectors200Response {
    return GetSourceConnectors200ResponseFromJSONTyped(json, false);
}

export function GetSourceConnectors200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSourceConnectors200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'sourceConnectors': ((json['sourceConnectors'] as Array<any>).map(SourceConnectorFromJSON)),
    };
}

export function GetSourceConnectors200ResponseToJSON(json: any): GetSourceConnectors200Response {
    return GetSourceConnectors200ResponseToJSONTyped(json, false);
}

export function GetSourceConnectors200ResponseToJSONTyped(value?: GetSourceConnectors200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sourceConnectors': ((value['sourceConnectors'] as Array<any>).map(SourceConnectorToJSON)),
    };
}

