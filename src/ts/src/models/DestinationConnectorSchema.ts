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
import type { DestinationConnectorType } from './DestinationConnectorType';
import {
    DestinationConnectorTypeFromJSON,
    DestinationConnectorTypeFromJSONTyped,
    DestinationConnectorTypeToJSON,
    DestinationConnectorTypeToJSONTyped,
} from './DestinationConnectorType';

/**
 * 
 * @export
 * @interface DestinationConnectorSchema
 */
export interface DestinationConnectorSchema {
    /**
     * 
     * @type {string}
     * @memberof DestinationConnectorSchema
     */
    id: string;
    /**
     * 
     * @type {DestinationConnectorType}
     * @memberof DestinationConnectorSchema
     */
    type: DestinationConnectorType;
    /**
     * 
     * @type {{ [key: string]: any | null; }}
     * @memberof DestinationConnectorSchema
     */
    config?: { [key: string]: any | null; };
}



/**
 * Check if a given object implements the DestinationConnectorSchema interface.
 */
export function instanceOfDestinationConnectorSchema(value: object): value is DestinationConnectorSchema {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function DestinationConnectorSchemaFromJSON(json: any): DestinationConnectorSchema {
    return DestinationConnectorSchemaFromJSONTyped(json, false);
}

export function DestinationConnectorSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DestinationConnectorSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': DestinationConnectorTypeFromJSON(json['type']),
        'config': json['config'] == null ? undefined : json['config'],
    };
}

export function DestinationConnectorSchemaToJSON(json: any): DestinationConnectorSchema {
    return DestinationConnectorSchemaToJSONTyped(json, false);
}

export function DestinationConnectorSchemaToJSONTyped(value?: DestinationConnectorSchema | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': DestinationConnectorTypeToJSON(value['type']),
        'config': value['config'],
    };
}

