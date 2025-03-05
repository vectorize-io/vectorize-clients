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
 * @interface SourceConnectorSchema
 */
export interface SourceConnectorSchema {
    /**
     * 
     * @type {string}
     * @memberof SourceConnectorSchema
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SourceConnectorSchema
     */
    type: SourceConnectorSchemaTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof SourceConnectorSchema
     */
    config: object;
}


/**
 * @export
 */
export const SourceConnectorSchemaTypeEnum = {
    AwsS3: 'AWS_S3',
    AzureBlob: 'AZURE_BLOB',
    Confluence: 'CONFLUENCE',
    Discord: 'DISCORD',
    Dropbox: 'DROPBOX',
    Firecrawl: 'FIRECRAWL',
    Gcs: 'GCS',
    GoogleDrive: 'GOOGLE_DRIVE',
    Intercom: 'INTERCOM',
    OneDrive: 'ONE_DRIVE',
    Sharepoint: 'SHAREPOINT',
    WebCrawler: 'WEB_CRAWLER',
    FileUpload: 'FILE_UPLOAD',
    Salesforce: 'SALESFORCE',
    Zendesk: 'ZENDESK'
} as const;
export type SourceConnectorSchemaTypeEnum = typeof SourceConnectorSchemaTypeEnum[keyof typeof SourceConnectorSchemaTypeEnum];


/**
 * Check if a given object implements the SourceConnectorSchema interface.
 */
export function instanceOfSourceConnectorSchema(value: object): value is SourceConnectorSchema {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('config' in value) || value['config'] === undefined) return false;
    return true;
}

export function SourceConnectorSchemaFromJSON(json: any): SourceConnectorSchema {
    return SourceConnectorSchemaFromJSONTyped(json, false);
}

export function SourceConnectorSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceConnectorSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'config': json['config'],
    };
}

export function SourceConnectorSchemaToJSON(json: any): SourceConnectorSchema {
    return SourceConnectorSchemaToJSONTyped(json, false);
}

export function SourceConnectorSchemaToJSONTyped(value?: SourceConnectorSchema | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
        'config': value['config'],
    };
}

