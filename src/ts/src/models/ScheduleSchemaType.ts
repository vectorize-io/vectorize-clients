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


/**
 * 
 * @export
 */
export const ScheduleSchemaType = {
    Manual: 'manual',
    Realtime: 'realtime',
    Custom: 'custom'
} as const;
export type ScheduleSchemaType = typeof ScheduleSchemaType[keyof typeof ScheduleSchemaType];


export function instanceOfScheduleSchemaType(value: any): boolean {
    for (const key in ScheduleSchemaType) {
        if (Object.prototype.hasOwnProperty.call(ScheduleSchemaType, key)) {
            if (ScheduleSchemaType[key as keyof typeof ScheduleSchemaType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ScheduleSchemaTypeFromJSON(json: any): ScheduleSchemaType {
    return ScheduleSchemaTypeFromJSONTyped(json, false);
}

export function ScheduleSchemaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScheduleSchemaType {
    return json as ScheduleSchemaType;
}

export function ScheduleSchemaTypeToJSON(value?: ScheduleSchemaType | null): any {
    return value as any;
}

export function ScheduleSchemaTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): ScheduleSchemaType {
    return value as ScheduleSchemaType;
}

