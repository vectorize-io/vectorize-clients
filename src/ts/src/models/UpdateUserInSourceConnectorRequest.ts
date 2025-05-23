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
import type { AddUserToSourceConnectorRequestSelectedFilesValue } from './AddUserToSourceConnectorRequestSelectedFilesValue';
import {
    AddUserToSourceConnectorRequestSelectedFilesValueFromJSON,
    AddUserToSourceConnectorRequestSelectedFilesValueFromJSONTyped,
    AddUserToSourceConnectorRequestSelectedFilesValueToJSON,
    AddUserToSourceConnectorRequestSelectedFilesValueToJSONTyped,
} from './AddUserToSourceConnectorRequestSelectedFilesValue';

/**
 * 
 * @export
 * @interface UpdateUserInSourceConnectorRequest
 */
export interface UpdateUserInSourceConnectorRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserInSourceConnectorRequest
     */
    userId: string;
    /**
     * 
     * @type {{ [key: string]: AddUserToSourceConnectorRequestSelectedFilesValue; }}
     * @memberof UpdateUserInSourceConnectorRequest
     */
    selectedFiles?: { [key: string]: AddUserToSourceConnectorRequestSelectedFilesValue; };
    /**
     * 
     * @type {string}
     * @memberof UpdateUserInSourceConnectorRequest
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the UpdateUserInSourceConnectorRequest interface.
 */
export function instanceOfUpdateUserInSourceConnectorRequest(value: object): value is UpdateUserInSourceConnectorRequest {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    return true;
}

export function UpdateUserInSourceConnectorRequestFromJSON(json: any): UpdateUserInSourceConnectorRequest {
    return UpdateUserInSourceConnectorRequestFromJSONTyped(json, false);
}

export function UpdateUserInSourceConnectorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserInSourceConnectorRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'selectedFiles': json['selectedFiles'] == null ? undefined : (mapValues(json['selectedFiles'], AddUserToSourceConnectorRequestSelectedFilesValueFromJSON)),
        'refreshToken': json['refreshToken'] == null ? undefined : json['refreshToken'],
    };
}

export function UpdateUserInSourceConnectorRequestToJSON(json: any): UpdateUserInSourceConnectorRequest {
    return UpdateUserInSourceConnectorRequestToJSONTyped(json, false);
}

export function UpdateUserInSourceConnectorRequestToJSONTyped(value?: UpdateUserInSourceConnectorRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'userId': value['userId'],
        'selectedFiles': value['selectedFiles'] == null ? undefined : (mapValues(value['selectedFiles'], AddUserToSourceConnectorRequestSelectedFilesValueToJSON)),
        'refreshToken': value['refreshToken'],
    };
}

