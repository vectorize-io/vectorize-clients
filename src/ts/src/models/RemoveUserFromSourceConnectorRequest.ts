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
 * @interface RemoveUserFromSourceConnectorRequest
 */
export interface RemoveUserFromSourceConnectorRequest {
    /**
     * 
     * @type {string}
     * @memberof RemoveUserFromSourceConnectorRequest
     */
    userId: string;
}

/**
 * Check if a given object implements the RemoveUserFromSourceConnectorRequest interface.
 */
export function instanceOfRemoveUserFromSourceConnectorRequest(value: object): value is RemoveUserFromSourceConnectorRequest {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    return true;
}

export function RemoveUserFromSourceConnectorRequestFromJSON(json: any): RemoveUserFromSourceConnectorRequest {
    return RemoveUserFromSourceConnectorRequestFromJSONTyped(json, false);
}

export function RemoveUserFromSourceConnectorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveUserFromSourceConnectorRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['userId'],
    };
}

export function RemoveUserFromSourceConnectorRequestToJSON(json: any): RemoveUserFromSourceConnectorRequest {
    return RemoveUserFromSourceConnectorRequestToJSONTyped(json, false);
}

export function RemoveUserFromSourceConnectorRequestToJSONTyped(value?: RemoveUserFromSourceConnectorRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userId': value['userId'],
    };
}

