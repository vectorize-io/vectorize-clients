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
 * @interface N8NConfig
 */
export interface N8NConfig {
    /**
     * 
     * @type {string}
     * @memberof N8NConfig
     */
    account: string;
    /**
     * 
     * @type {string}
     * @memberof N8NConfig
     */
    webhookPath: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof N8NConfig
     */
    headers?: { [key: string]: string; };
}

/**
 * Check if a given object implements the N8NConfig interface.
 */
export function instanceOfN8NConfig(value: object): value is N8NConfig {
    if (!('account' in value) || value['account'] === undefined) return false;
    if (!('webhookPath' in value) || value['webhookPath'] === undefined) return false;
    return true;
}

export function N8NConfigFromJSON(json: any): N8NConfig {
    return N8NConfigFromJSONTyped(json, false);
}

export function N8NConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): N8NConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'account': json['account'],
        'webhookPath': json['webhookPath'],
        'headers': json['headers'] == null ? undefined : json['headers'],
    };
}

export function N8NConfigToJSON(json: any): N8NConfig {
    return N8NConfigToJSONTyped(json, false);
}

export function N8NConfigToJSONTyped(value?: N8NConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'account': value['account'],
        'webhookPath': value['webhookPath'],
        'headers': value['headers'],
    };
}

