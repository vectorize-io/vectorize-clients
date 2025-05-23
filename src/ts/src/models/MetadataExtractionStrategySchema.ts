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
 * @interface MetadataExtractionStrategySchema
 */
export interface MetadataExtractionStrategySchema {
    /**
     * 
     * @type {string}
     * @memberof MetadataExtractionStrategySchema
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MetadataExtractionStrategySchema
     */
    schema: string;
}

/**
 * Check if a given object implements the MetadataExtractionStrategySchema interface.
 */
export function instanceOfMetadataExtractionStrategySchema(value: object): value is MetadataExtractionStrategySchema {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('schema' in value) || value['schema'] === undefined) return false;
    return true;
}

export function MetadataExtractionStrategySchemaFromJSON(json: any): MetadataExtractionStrategySchema {
    return MetadataExtractionStrategySchemaFromJSONTyped(json, false);
}

export function MetadataExtractionStrategySchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataExtractionStrategySchema {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'schema': json['schema'],
    };
}

export function MetadataExtractionStrategySchemaToJSON(json: any): MetadataExtractionStrategySchema {
    return MetadataExtractionStrategySchemaToJSONTyped(json, false);
}

export function MetadataExtractionStrategySchemaToJSONTyped(value?: MetadataExtractionStrategySchema | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'schema': value['schema'],
    };
}

