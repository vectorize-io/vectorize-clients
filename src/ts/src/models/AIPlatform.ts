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
 * @interface AIPlatform
 */
export interface AIPlatform {
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: any | null; }}
     * @memberof AIPlatform
     */
    configDoc?: { [key: string]: any | null; };
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    createdAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    createdById?: string;
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    lastUpdatedById?: string;
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    createdByEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    lastUpdatedByEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    errorMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AIPlatform
     */
    verificationStatus?: string;
}

/**
 * Check if a given object implements the AIPlatform interface.
 */
export function instanceOfAIPlatform(value: object): value is AIPlatform {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function AIPlatformFromJSON(json: any): AIPlatform {
    return AIPlatformFromJSONTyped(json, false);
}

export function AIPlatformFromJSONTyped(json: any, ignoreDiscriminator: boolean): AIPlatform {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'name': json['name'],
        'configDoc': json['configDoc'] == null ? undefined : json['configDoc'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'createdById': json['createdById'] == null ? undefined : json['createdById'],
        'lastUpdatedById': json['lastUpdatedById'] == null ? undefined : json['lastUpdatedById'],
        'createdByEmail': json['createdByEmail'] == null ? undefined : json['createdByEmail'],
        'lastUpdatedByEmail': json['lastUpdatedByEmail'] == null ? undefined : json['lastUpdatedByEmail'],
        'errorMessage': json['errorMessage'] == null ? undefined : json['errorMessage'],
        'verificationStatus': json['verificationStatus'] == null ? undefined : json['verificationStatus'],
    };
}

export function AIPlatformToJSON(json: any): AIPlatform {
    return AIPlatformToJSONTyped(json, false);
}

export function AIPlatformToJSONTyped(value?: AIPlatform | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
        'name': value['name'],
        'configDoc': value['configDoc'],
        'createdAt': value['createdAt'],
        'createdById': value['createdById'],
        'lastUpdatedById': value['lastUpdatedById'],
        'createdByEmail': value['createdByEmail'],
        'lastUpdatedByEmail': value['lastUpdatedByEmail'],
        'errorMessage': value['errorMessage'],
        'verificationStatus': value['verificationStatus'],
    };
}

