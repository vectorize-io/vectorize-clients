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
 * @interface UploadFile
 */
export interface UploadFile {
    /**
     * 
     * @type {string}
     * @memberof UploadFile
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof UploadFile
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof UploadFile
     */
    size: number;
    /**
     * 
     * @type {string}
     * @memberof UploadFile
     */
    extension?: string;
    /**
     * 
     * @type {string}
     * @memberof UploadFile
     */
    lastModified: string | null;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UploadFile
     */
    metadata: { [key: string]: string; };
}

/**
 * Check if a given object implements the UploadFile interface.
 */
export function instanceOfUploadFile(value: object): value is UploadFile {
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    if (!('lastModified' in value) || value['lastModified'] === undefined) return false;
    if (!('metadata' in value) || value['metadata'] === undefined) return false;
    return true;
}

export function UploadFileFromJSON(json: any): UploadFile {
    return UploadFileFromJSONTyped(json, false);
}

export function UploadFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFile {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'],
        'name': json['name'],
        'size': json['size'],
        'extension': json['extension'] == null ? undefined : json['extension'],
        'lastModified': json['lastModified'],
        'metadata': json['metadata'],
    };
}

export function UploadFileToJSON(json: any): UploadFile {
    return UploadFileToJSONTyped(json, false);
}

export function UploadFileToJSONTyped(value?: UploadFile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'key': value['key'],
        'name': value['name'],
        'size': value['size'],
        'extension': value['extension'],
        'lastModified': value['lastModified'],
        'metadata': value['metadata'],
    };
}

