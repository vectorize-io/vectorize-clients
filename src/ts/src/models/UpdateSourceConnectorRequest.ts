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
 * @interface UpdateSourceConnectorRequest
 */
export interface UpdateSourceConnectorRequest {
    /**
     * 
     * @type {{ [key: string]: any | null; }}
     * @memberof UpdateSourceConnectorRequest
     */
    config: { [key: string]: any | null; };
}

/**
 * Check if a given object implements the UpdateSourceConnectorRequest interface.
 */
export function instanceOfUpdateSourceConnectorRequest(value: object): value is UpdateSourceConnectorRequest {
    if (!('config' in value) || value['config'] === undefined) return false;
    return true;
}

export function UpdateSourceConnectorRequestFromJSON(json: any): UpdateSourceConnectorRequest {
    return UpdateSourceConnectorRequestFromJSONTyped(json, false);
}

export function UpdateSourceConnectorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSourceConnectorRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'config': json['config'],
    };
}

export function UpdateSourceConnectorRequestToJSON(json: any): UpdateSourceConnectorRequest {
    return UpdateSourceConnectorRequestToJSONTyped(json, false);
}

export function UpdateSourceConnectorRequestToJSONTyped(value?: UpdateSourceConnectorRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'config': value['config'],
    };
}

