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
 * @interface StartFileUploadResponse
 */
export interface StartFileUploadResponse {
    /**
     * 
     * @type {string}
     * @memberof StartFileUploadResponse
     */
    fileId: string;
    /**
     * 
     * @type {string}
     * @memberof StartFileUploadResponse
     */
    uploadUrl: string;
}

/**
 * Check if a given object implements the StartFileUploadResponse interface.
 */
export function instanceOfStartFileUploadResponse(value: object): value is StartFileUploadResponse {
    if (!('fileId' in value) || value['fileId'] === undefined) return false;
    if (!('uploadUrl' in value) || value['uploadUrl'] === undefined) return false;
    return true;
}

export function StartFileUploadResponseFromJSON(json: any): StartFileUploadResponse {
    return StartFileUploadResponseFromJSONTyped(json, false);
}

export function StartFileUploadResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartFileUploadResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'fileId': json['fileId'],
        'uploadUrl': json['uploadUrl'],
    };
}

export function StartFileUploadResponseToJSON(json: any): StartFileUploadResponse {
    return StartFileUploadResponseToJSONTyped(json, false);
}

export function StartFileUploadResponseToJSONTyped(value?: StartFileUploadResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fileId': value['fileId'],
        'uploadUrl': value['uploadUrl'],
    };
}

