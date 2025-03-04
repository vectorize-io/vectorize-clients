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
 * @interface PipelineListSummary
 */
export interface PipelineListSummary {
    /**
     * 
     * @type {string}
     * @memberof PipelineListSummary
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineListSummary
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof PipelineListSummary
     */
    documentCount: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof PipelineListSummary
     */
    sourceConnectorAuthIds: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PipelineListSummary
     */
    destinationConnectorAuthIds: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PipelineListSummary
     */
    aiPlatformAuthIds: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PipelineListSummary
     */
    sourceConnectorTypes: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PipelineListSummary
     */
    destinationConnectorTypes: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PipelineListSummary
     */
    aiPlatformTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PipelineListSummary
     */
    createdAt: string | null;
    /**
     * 
     * @type {string}
     * @memberof PipelineListSummary
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof PipelineListSummary
     */
    status?: string;
    /**
     * 
     * @type {{ [key: string]: any | null; }}
     * @memberof PipelineListSummary
     */
    configDoc?: { [key: string]: any | null; };
}

/**
 * Check if a given object implements the PipelineListSummary interface.
 */
export function instanceOfPipelineListSummary(value: object): value is PipelineListSummary {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('documentCount' in value) || value['documentCount'] === undefined) return false;
    if (!('sourceConnectorAuthIds' in value) || value['sourceConnectorAuthIds'] === undefined) return false;
    if (!('destinationConnectorAuthIds' in value) || value['destinationConnectorAuthIds'] === undefined) return false;
    if (!('aiPlatformAuthIds' in value) || value['aiPlatformAuthIds'] === undefined) return false;
    if (!('sourceConnectorTypes' in value) || value['sourceConnectorTypes'] === undefined) return false;
    if (!('destinationConnectorTypes' in value) || value['destinationConnectorTypes'] === undefined) return false;
    if (!('aiPlatformTypes' in value) || value['aiPlatformTypes'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    return true;
}

export function PipelineListSummaryFromJSON(json: any): PipelineListSummary {
    return PipelineListSummaryFromJSONTyped(json, false);
}

export function PipelineListSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PipelineListSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'documentCount': json['documentCount'],
        'sourceConnectorAuthIds': json['sourceConnectorAuthIds'],
        'destinationConnectorAuthIds': json['destinationConnectorAuthIds'],
        'aiPlatformAuthIds': json['aiPlatformAuthIds'],
        'sourceConnectorTypes': json['sourceConnectorTypes'],
        'destinationConnectorTypes': json['destinationConnectorTypes'],
        'aiPlatformTypes': json['aiPlatformTypes'],
        'createdAt': json['createdAt'],
        'createdBy': json['createdBy'],
        'status': json['status'] == null ? undefined : json['status'],
        'configDoc': json['configDoc'] == null ? undefined : json['configDoc'],
    };
}

export function PipelineListSummaryToJSON(json: any): PipelineListSummary {
    return PipelineListSummaryToJSONTyped(json, false);
}

export function PipelineListSummaryToJSONTyped(value?: PipelineListSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'documentCount': value['documentCount'],
        'sourceConnectorAuthIds': value['sourceConnectorAuthIds'],
        'destinationConnectorAuthIds': value['destinationConnectorAuthIds'],
        'aiPlatformAuthIds': value['aiPlatformAuthIds'],
        'sourceConnectorTypes': value['sourceConnectorTypes'],
        'destinationConnectorTypes': value['destinationConnectorTypes'],
        'aiPlatformTypes': value['aiPlatformTypes'],
        'createdAt': value['createdAt'],
        'createdBy': value['createdBy'],
        'status': value['status'],
        'configDoc': value['configDoc'],
    };
}

