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
import type { ScheduleSchemaType } from './ScheduleSchemaType';
import {
    ScheduleSchemaTypeFromJSON,
    ScheduleSchemaTypeFromJSONTyped,
    ScheduleSchemaTypeToJSON,
    ScheduleSchemaTypeToJSONTyped,
} from './ScheduleSchemaType';

/**
 * 
 * @export
 * @interface ScheduleSchema
 */
export interface ScheduleSchema {
    /**
     * 
     * @type {ScheduleSchemaType}
     * @memberof ScheduleSchema
     */
    type: ScheduleSchemaType;
}



/**
 * Check if a given object implements the ScheduleSchema interface.
 */
export function instanceOfScheduleSchema(value: object): value is ScheduleSchema {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ScheduleSchemaFromJSON(json: any): ScheduleSchema {
    return ScheduleSchemaFromJSONTyped(json, false);
}

export function ScheduleSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'type': ScheduleSchemaTypeFromJSON(json['type']),
    };
}

export function ScheduleSchemaToJSON(json: any): ScheduleSchema {
    return ScheduleSchemaToJSONTyped(json, false);
}

export function ScheduleSchemaToJSONTyped(value?: ScheduleSchema | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': ScheduleSchemaTypeToJSON(value['type']),
    };
}

