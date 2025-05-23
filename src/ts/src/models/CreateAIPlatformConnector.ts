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
import type { AIPlatformType } from './AIPlatformType';
import {
    AIPlatformTypeFromJSON,
    AIPlatformTypeFromJSONTyped,
    AIPlatformTypeToJSON,
    AIPlatformTypeToJSONTyped,
} from './AIPlatformType';

/**
 * 
 * @export
 * @interface CreateAIPlatformConnector
 */
export interface CreateAIPlatformConnector {
    /**
     * 
     * @type {string}
     * @memberof CreateAIPlatformConnector
     */
    name: string;
    /**
     * 
     * @type {AIPlatformType}
     * @memberof CreateAIPlatformConnector
     */
    type: AIPlatformType;
    /**
     * 
     * @type {{ [key: string]: any | null; }}
     * @memberof CreateAIPlatformConnector
     */
    config?: { [key: string]: any | null; };
}



/**
 * Check if a given object implements the CreateAIPlatformConnector interface.
 */
export function instanceOfCreateAIPlatformConnector(value: object): value is CreateAIPlatformConnector {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function CreateAIPlatformConnectorFromJSON(json: any): CreateAIPlatformConnector {
    return CreateAIPlatformConnectorFromJSONTyped(json, false);
}

export function CreateAIPlatformConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateAIPlatformConnector {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': AIPlatformTypeFromJSON(json['type']),
        'config': json['config'] == null ? undefined : json['config'],
    };
}

export function CreateAIPlatformConnectorToJSON(json: any): CreateAIPlatformConnector {
    return CreateAIPlatformConnectorToJSONTyped(json, false);
}

export function CreateAIPlatformConnectorToJSONTyped(value?: CreateAIPlatformConnector | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'type': AIPlatformTypeToJSON(value['type']),
        'config': value['config'],
    };
}

