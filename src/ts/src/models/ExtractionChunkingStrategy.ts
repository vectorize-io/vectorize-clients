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
export const ExtractionChunkingStrategy = {
    Markdown: 'markdown'
} as const;
export type ExtractionChunkingStrategy = typeof ExtractionChunkingStrategy[keyof typeof ExtractionChunkingStrategy];


export function instanceOfExtractionChunkingStrategy(value: any): boolean {
    for (const key in ExtractionChunkingStrategy) {
        if (Object.prototype.hasOwnProperty.call(ExtractionChunkingStrategy, key)) {
            if (ExtractionChunkingStrategy[key as keyof typeof ExtractionChunkingStrategy] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ExtractionChunkingStrategyFromJSON(json: any): ExtractionChunkingStrategy {
    return ExtractionChunkingStrategyFromJSONTyped(json, false);
}

export function ExtractionChunkingStrategyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtractionChunkingStrategy {
    return json as ExtractionChunkingStrategy;
}

export function ExtractionChunkingStrategyToJSON(value?: ExtractionChunkingStrategy | null): any {
    return value as any;
}

export function ExtractionChunkingStrategyToJSONTyped(value: any, ignoreDiscriminator: boolean): ExtractionChunkingStrategy {
    return value as ExtractionChunkingStrategy;
}

