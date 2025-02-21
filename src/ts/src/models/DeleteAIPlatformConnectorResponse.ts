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
 * @interface DeleteAIPlatformConnectorResponse
 */
export interface DeleteAIPlatformConnectorResponse {
    /**
     * 
     * @type {string}
     * @memberof DeleteAIPlatformConnectorResponse
     */
    message: string;
}

/**
 * Check if a given object implements the DeleteAIPlatformConnectorResponse interface.
 */
export function instanceOfDeleteAIPlatformConnectorResponse(value: object): value is DeleteAIPlatformConnectorResponse {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function DeleteAIPlatformConnectorResponseFromJSON(json: any): DeleteAIPlatformConnectorResponse {
    return DeleteAIPlatformConnectorResponseFromJSONTyped(json, false);
}

export function DeleteAIPlatformConnectorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteAIPlatformConnectorResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function DeleteAIPlatformConnectorResponseToJSON(json: any): DeleteAIPlatformConnectorResponse {
    return DeleteAIPlatformConnectorResponseToJSONTyped(json, false);
}

export function DeleteAIPlatformConnectorResponseToJSONTyped(value?: DeleteAIPlatformConnectorResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

