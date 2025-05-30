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
 * @interface AIPlatformConfigSchema
 */
export interface AIPlatformConfigSchema {
    /**
     * 
     * @type {string}
     * @memberof AIPlatformConfigSchema
     */
    embeddingModel?: AIPlatformConfigSchemaEmbeddingModelEnum;
    /**
     * 
     * @type {string}
     * @memberof AIPlatformConfigSchema
     */
    chunkingStrategy?: AIPlatformConfigSchemaChunkingStrategyEnum;
    /**
     * 
     * @type {number}
     * @memberof AIPlatformConfigSchema
     */
    chunkSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AIPlatformConfigSchema
     */
    chunkOverlap?: number;
    /**
     * 
     * @type {number}
     * @memberof AIPlatformConfigSchema
     */
    dimensions?: number;
    /**
     * 
     * @type {string}
     * @memberof AIPlatformConfigSchema
     */
    extractionStrategy?: AIPlatformConfigSchemaExtractionStrategyEnum;
}


/**
 * @export
 */
export const AIPlatformConfigSchemaEmbeddingModelEnum = {
    VectorizeOpenAiTextEmbedding2: 'VECTORIZE_OPEN_AI_TEXT_EMBEDDING_2',
    VectorizeOpenAiTextEmbedding3Large: 'VECTORIZE_OPEN_AI_TEXT_EMBEDDING_3_LARGE',
    VectorizeOpenAiTextEmbedding3Small: 'VECTORIZE_OPEN_AI_TEXT_EMBEDDING_3_SMALL',
    VectorizeVoyageAi2: 'VECTORIZE_VOYAGE_AI_2',
    VectorizeVoyageAi3: 'VECTORIZE_VOYAGE_AI_3',
    VectorizeVoyageAi3Lite: 'VECTORIZE_VOYAGE_AI_3_LITE',
    VectorizeVoyageAi3Large: 'VECTORIZE_VOYAGE_AI_3_LARGE',
    VectorizeVoyageAiFinance2: 'VECTORIZE_VOYAGE_AI_FINANCE_2',
    VectorizeVoyageAiMultilingual2: 'VECTORIZE_VOYAGE_AI_MULTILINGUAL_2',
    VectorizeVoyageAiLaw2: 'VECTORIZE_VOYAGE_AI_LAW_2',
    VectorizeVoyageAiCode2: 'VECTORIZE_VOYAGE_AI_CODE_2',
    VectorizeTitanTextEmbedding2: 'VECTORIZE_TITAN_TEXT_EMBEDDING_2',
    VectorizeTitanTextEmbedding1: 'VECTORIZE_TITAN_TEXT_EMBEDDING_1',
    OpenAiTextEmbedding2: 'OPEN_AI_TEXT_EMBEDDING_2',
    OpenAiTextEmbedding3Small: 'OPEN_AI_TEXT_EMBEDDING_3_SMALL',
    OpenAiTextEmbedding3Large: 'OPEN_AI_TEXT_EMBEDDING_3_LARGE',
    VoyageAi2: 'VOYAGE_AI_2',
    VoyageAi3: 'VOYAGE_AI_3',
    VoyageAi3Lite: 'VOYAGE_AI_3_LITE',
    VoyageAi3Large: 'VOYAGE_AI_3_LARGE',
    VoyageAiFinance2: 'VOYAGE_AI_FINANCE_2',
    VoyageAiMultilingual2: 'VOYAGE_AI_MULTILINGUAL_2',
    VoyageAiLaw2: 'VOYAGE_AI_LAW_2',
    VoyageAiCode2: 'VOYAGE_AI_CODE_2',
    TitanTextEmbedding1: 'TITAN_TEXT_EMBEDDING_1',
    TitanTextEmbedding2: 'TITAN_TEXT_EMBEDDING_2',
    VertexTextEmbedding4: 'VERTEX_TEXT_EMBEDDING_4',
    VertexTextEmbeddingGecko3: 'VERTEX_TEXT_EMBEDDING_GECKO_3',
    VertexGeckoMultilingual1: 'VERTEX_GECKO_MULTILINGUAL_1',
    VertexMultilingualEmbedding2: 'VERTEX_MULTILINGUAL_EMBEDDING_2'
} as const;
export type AIPlatformConfigSchemaEmbeddingModelEnum = typeof AIPlatformConfigSchemaEmbeddingModelEnum[keyof typeof AIPlatformConfigSchemaEmbeddingModelEnum];

/**
 * @export
 */
export const AIPlatformConfigSchemaChunkingStrategyEnum = {
    Fixed: 'FIXED',
    Sentence: 'SENTENCE',
    Paragraph: 'PARAGRAPH',
    Markdown: 'MARKDOWN'
} as const;
export type AIPlatformConfigSchemaChunkingStrategyEnum = typeof AIPlatformConfigSchemaChunkingStrategyEnum[keyof typeof AIPlatformConfigSchemaChunkingStrategyEnum];

/**
 * @export
 */
export const AIPlatformConfigSchemaExtractionStrategyEnum = {
    Fast: 'FAST',
    Iris: 'IRIS',
    Mixed: 'MIXED'
} as const;
export type AIPlatformConfigSchemaExtractionStrategyEnum = typeof AIPlatformConfigSchemaExtractionStrategyEnum[keyof typeof AIPlatformConfigSchemaExtractionStrategyEnum];


/**
 * Check if a given object implements the AIPlatformConfigSchema interface.
 */
export function instanceOfAIPlatformConfigSchema(value: object): value is AIPlatformConfigSchema {
    return true;
}

export function AIPlatformConfigSchemaFromJSON(json: any): AIPlatformConfigSchema {
    return AIPlatformConfigSchemaFromJSONTyped(json, false);
}

export function AIPlatformConfigSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AIPlatformConfigSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'embeddingModel': json['embeddingModel'] == null ? undefined : json['embeddingModel'],
        'chunkingStrategy': json['chunkingStrategy'] == null ? undefined : json['chunkingStrategy'],
        'chunkSize': json['chunkSize'] == null ? undefined : json['chunkSize'],
        'chunkOverlap': json['chunkOverlap'] == null ? undefined : json['chunkOverlap'],
        'dimensions': json['dimensions'] == null ? undefined : json['dimensions'],
        'extractionStrategy': json['extractionStrategy'] == null ? undefined : json['extractionStrategy'],
    };
}

export function AIPlatformConfigSchemaToJSON(json: any): AIPlatformConfigSchema {
    return AIPlatformConfigSchemaToJSONTyped(json, false);
}

export function AIPlatformConfigSchemaToJSONTyped(value?: AIPlatformConfigSchema | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'embeddingModel': value['embeddingModel'],
        'chunkingStrategy': value['chunkingStrategy'],
        'chunkSize': value['chunkSize'],
        'chunkOverlap': value['chunkOverlap'],
        'dimensions': value['dimensions'],
        'extractionStrategy': value['extractionStrategy'],
    };
}

