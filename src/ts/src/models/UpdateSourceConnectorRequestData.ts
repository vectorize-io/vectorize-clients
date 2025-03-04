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
 * @interface UpdateSourceConnectorRequestData
 */
export interface UpdateSourceConnectorRequestData {
    /**
     * 
     * @type {SourceConnector}
     * @memberof UpdateSourceConnectorRequestData
     */
    updatedConnector: SourceConnector;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateSourceConnectorRequestData
     */
    pipelineIds?: Array<string>;
}

/**
 * Check if a given object implements the UpdateSourceConnectorRequestData interface.
 */
export function instanceOfUpdateSourceConnectorRequestData(value: object): value is UpdateSourceConnectorRequestData {
    if (!('updatedConnector' in value) || value['updatedConnector'] === undefined) return false;
    return true;
}

export function UpdateSourceConnectorRequestDataFromJSON(json: any): UpdateSourceConnectorRequestData {
    return UpdateSourceConnectorRequestDataFromJSONTyped(json, false);
}

export function UpdateSourceConnectorRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSourceConnectorRequestData {
    if (json == null) {
        return json;
    }
    return {
        
        'updatedConnector': SourceConnectorFromJSON(json['updatedConnector']),
        'pipelineIds': json['pipelineIds'] == null ? undefined : json['pipelineIds'],
    };
}

export function UpdateSourceConnectorRequestDataToJSON(json: any): UpdateSourceConnectorRequestData {
    return UpdateSourceConnectorRequestDataToJSONTyped(json, false);
}

export function UpdateSourceConnectorRequestDataToJSONTyped(value?: UpdateSourceConnectorRequestData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'updatedConnector': SourceConnectorToJSON(value['updatedConnector']),
        'pipelineIds': value['pipelineIds'],
    };
}

