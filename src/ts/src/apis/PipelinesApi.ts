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


import * as runtime from '../runtime';
import type {
  CreatePipelineResponse,
  DeletePipelineResponse,
  GetDeepResearchResponse,
  GetPipelineEventsResponse,
  GetPipelineMetricsResponse,
  GetPipelineResponse,
  GetPipelines400Response,
  GetPipelinesResponse,
  PipelineConfigurationSchema,
  RetrieveDocumentsRequest,
  RetrieveDocumentsResponse,
  StartDeepResearchRequest,
  StartDeepResearchResponse,
  StartPipelineResponse,
  StopPipelineResponse,
} from '../models/index';
import {
    CreatePipelineResponseFromJSON,
    CreatePipelineResponseToJSON,
    DeletePipelineResponseFromJSON,
    DeletePipelineResponseToJSON,
    GetDeepResearchResponseFromJSON,
    GetDeepResearchResponseToJSON,
    GetPipelineEventsResponseFromJSON,
    GetPipelineEventsResponseToJSON,
    GetPipelineMetricsResponseFromJSON,
    GetPipelineMetricsResponseToJSON,
    GetPipelineResponseFromJSON,
    GetPipelineResponseToJSON,
    GetPipelines400ResponseFromJSON,
    GetPipelines400ResponseToJSON,
    GetPipelinesResponseFromJSON,
    GetPipelinesResponseToJSON,
    PipelineConfigurationSchemaFromJSON,
    PipelineConfigurationSchemaToJSON,
    RetrieveDocumentsRequestFromJSON,
    RetrieveDocumentsRequestToJSON,
    RetrieveDocumentsResponseFromJSON,
    RetrieveDocumentsResponseToJSON,
    StartDeepResearchRequestFromJSON,
    StartDeepResearchRequestToJSON,
    StartDeepResearchResponseFromJSON,
    StartDeepResearchResponseToJSON,
    StartPipelineResponseFromJSON,
    StartPipelineResponseToJSON,
    StopPipelineResponseFromJSON,
    StopPipelineResponseToJSON,
} from '../models/index';

export interface CreatePipelineRequest {
    organization: string;
    pipelineConfigurationSchema: PipelineConfigurationSchema;
}

export interface DeletePipelineRequest {
    organization: string;
    pipeline: string;
}

export interface GetDeepResearchResultRequest {
    organization: string;
    pipeline: string;
    researchId: string;
}

export interface GetPipelineRequest {
    organization: string;
    pipeline: string;
}

export interface GetPipelineEventsRequest {
    organization: string;
    pipeline: string;
    nextToken?: string;
}

export interface GetPipelineMetricsRequest {
    organization: string;
    pipeline: string;
}

export interface GetPipelinesRequest {
    organization: string;
}

export interface RetrieveDocumentsOperationRequest {
    organization: string;
    pipeline: string;
    retrieveDocumentsRequest: RetrieveDocumentsRequest;
}

export interface StartDeepResearchOperationRequest {
    organization: string;
    pipeline: string;
    startDeepResearchRequest: StartDeepResearchRequest;
}

export interface StartPipelineRequest {
    organization: string;
    pipeline: string;
}

export interface StopPipelineRequest {
    organization: string;
    pipeline: string;
}

/**
 * 
 */
export class PipelinesApi extends runtime.BaseAPI {

    /**
     * Create a new source pipeline. Config fields for sources: Amazon S3 (AWS_S3):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Azure Blob Storage (AZURE_BLOB):  Polling Interval (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Confluence (CONFLUENCE):  Spaces (spaces): array oftext, Root Parents (root-parents): array oftext) | Discord (DISCORD):  Emoji Filter (emoji): array oftext, Author Filter (author): array oftext, Ignore Author Filter (ignore-author): array oftext, Limit (limit): number) | Dropbox (DROPBOX):  Read from these folders (optional) (path-prefix): array oftext) | Google Drive OAuth (GOOGLE_DRIVE_OAUTH):  Polling Interval (seconds) (idle-time): number) | Google Drive (Service Account) (GOOGLE_DRIVE):  Restrict ingest to these folder URLs (optional) (root-parents): array oftext, Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (Vectorize) (GOOGLE_DRIVE_OAUTH_MULTI):  Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (White Label) (GOOGLE_DRIVE_OAUTH_MULTI_CUSTOM):  Polling Interval (seconds) (idle-time): number) | Firecrawl (FIRECRAWL):  ) | GCP Cloud Storage (GCS):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Intercom (INTERCOM):  Reindex Interval (seconds) (reindexIntervalSeconds): number, Limit (limit): number, Tags (tags): array oftext) | OneDrive (ONE_DRIVE):  Read starting from this folder (optional) (path-prefix): text) | SharePoint (SHAREPOINT):  Site Name(s) (sites): array oftext) | Web Crawler (WEB_CRAWLER):  Additional Allowed URLs or prefix(es) (allowed-domains-opt): array ofurl, Forbidden Paths (forbidden-paths): array oftext, Throttle (ms) (min-time-between-requests): number, Max Error Count (max-error-count): number, Max URLs (max-urls): number, Max Depth (max-depth): number, Reindex Interval (seconds) (reindex-interval-seconds): number) | File Upload (FILE_UPLOAD):  ). Config fields for destinations: Couchbase Capella (CAPELLA):  Bucket Name (bucket): text, Scope Name (scope): text, Collection Name (collection): text, Search Index Name (index): text) | DataStax Astra (DATASTAX):  Collection Name (collection): text) | Elasticsearch (ELASTIC):  Index Name (index): text) | Pinecone (PINECONE):  Index Name (index): text, Namespace (namespace): text) | SingleStore (SINGLESTORE):  Table Name (table): text) | Milvus (MILVUS):  Collection Name (collection): text) | PostgreSQL (POSTGRESQL):  Table Name (table): text) | Qdrant (QDRANT):  Collection Name (collection): text) | Supabase (SUPABASE):  Table Name (table): text) | Weaviate (WEAVIATE):  Collection Name (collection): text) | Azure AI Search (AZUREAISEARCH):  Index Name (index): text) | Built-in (VECTORIZE):  ) | Chroma (CHROMA):  Index Name (index): text) | MongoDB (MONGODB):  Index Name (index): text). Config fields for AI platforms: 
     */
    async createPipelineRaw(requestParameters: CreatePipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreatePipelineResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling createPipeline().'
            );
        }

        if (requestParameters['pipelineConfigurationSchema'] == null) {
            throw new runtime.RequiredError(
                'pipelineConfigurationSchema',
                'Required parameter "pipelineConfigurationSchema" was null or undefined when calling createPipeline().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PipelineConfigurationSchemaToJSON(requestParameters['pipelineConfigurationSchema']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreatePipelineResponseFromJSON(jsonValue));
    }

    /**
     * Create a new source pipeline. Config fields for sources: Amazon S3 (AWS_S3):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Azure Blob Storage (AZURE_BLOB):  Polling Interval (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Confluence (CONFLUENCE):  Spaces (spaces): array oftext, Root Parents (root-parents): array oftext) | Discord (DISCORD):  Emoji Filter (emoji): array oftext, Author Filter (author): array oftext, Ignore Author Filter (ignore-author): array oftext, Limit (limit): number) | Dropbox (DROPBOX):  Read from these folders (optional) (path-prefix): array oftext) | Google Drive OAuth (GOOGLE_DRIVE_OAUTH):  Polling Interval (seconds) (idle-time): number) | Google Drive (Service Account) (GOOGLE_DRIVE):  Restrict ingest to these folder URLs (optional) (root-parents): array oftext, Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (Vectorize) (GOOGLE_DRIVE_OAUTH_MULTI):  Polling Interval (seconds) (idle-time): number) | Google Drive Multi-User (White Label) (GOOGLE_DRIVE_OAUTH_MULTI_CUSTOM):  Polling Interval (seconds) (idle-time): number) | Firecrawl (FIRECRAWL):  ) | GCP Cloud Storage (GCS):  Check for updates every (seconds) (idle-time): number, Path Prefix (path-prefix): text, Path Metadata Regex (path-metadata-regex): text, Path Regex Group Names (path-regex-group-names): array oftext) | Intercom (INTERCOM):  Reindex Interval (seconds) (reindexIntervalSeconds): number, Limit (limit): number, Tags (tags): array oftext) | OneDrive (ONE_DRIVE):  Read starting from this folder (optional) (path-prefix): text) | SharePoint (SHAREPOINT):  Site Name(s) (sites): array oftext) | Web Crawler (WEB_CRAWLER):  Additional Allowed URLs or prefix(es) (allowed-domains-opt): array ofurl, Forbidden Paths (forbidden-paths): array oftext, Throttle (ms) (min-time-between-requests): number, Max Error Count (max-error-count): number, Max URLs (max-urls): number, Max Depth (max-depth): number, Reindex Interval (seconds) (reindex-interval-seconds): number) | File Upload (FILE_UPLOAD):  ). Config fields for destinations: Couchbase Capella (CAPELLA):  Bucket Name (bucket): text, Scope Name (scope): text, Collection Name (collection): text, Search Index Name (index): text) | DataStax Astra (DATASTAX):  Collection Name (collection): text) | Elasticsearch (ELASTIC):  Index Name (index): text) | Pinecone (PINECONE):  Index Name (index): text, Namespace (namespace): text) | SingleStore (SINGLESTORE):  Table Name (table): text) | Milvus (MILVUS):  Collection Name (collection): text) | PostgreSQL (POSTGRESQL):  Table Name (table): text) | Qdrant (QDRANT):  Collection Name (collection): text) | Supabase (SUPABASE):  Table Name (table): text) | Weaviate (WEAVIATE):  Collection Name (collection): text) | Azure AI Search (AZUREAISEARCH):  Index Name (index): text) | Built-in (VECTORIZE):  ) | Chroma (CHROMA):  Index Name (index): text) | MongoDB (MONGODB):  Index Name (index): text). Config fields for AI platforms: 
     */
    async createPipeline(requestParameters: CreatePipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreatePipelineResponse> {
        const response = await this.createPipelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a pipeline
     */
    async deletePipelineRaw(requestParameters: DeletePipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletePipelineResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling deletePipeline().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling deletePipeline().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DeletePipelineResponseFromJSON(jsonValue));
    }

    /**
     * Delete a pipeline
     */
    async deletePipeline(requestParameters: DeletePipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletePipelineResponse> {
        const response = await this.deletePipelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get deep research result
     */
    async getDeepResearchResultRaw(requestParameters: GetDeepResearchResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDeepResearchResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling getDeepResearchResult().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling getDeepResearchResult().'
            );
        }

        if (requestParameters['researchId'] == null) {
            throw new runtime.RequiredError(
                'researchId',
                'Required parameter "researchId" was null or undefined when calling getDeepResearchResult().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}/deep-research/{researchId}`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))).replace(`{${"researchId"}}`, encodeURIComponent(String(requestParameters['researchId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDeepResearchResponseFromJSON(jsonValue));
    }

    /**
     * Get deep research result
     */
    async getDeepResearchResult(requestParameters: GetDeepResearchResultRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDeepResearchResponse> {
        const response = await this.getDeepResearchResultRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a pipeline
     */
    async getPipelineRaw(requestParameters: GetPipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPipelineResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling getPipeline().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling getPipeline().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPipelineResponseFromJSON(jsonValue));
    }

    /**
     * Get a pipeline
     */
    async getPipeline(requestParameters: GetPipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPipelineResponse> {
        const response = await this.getPipelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get pipeline events
     */
    async getPipelineEventsRaw(requestParameters: GetPipelineEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPipelineEventsResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling getPipelineEvents().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling getPipelineEvents().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['nextToken'] != null) {
            queryParameters['nextToken'] = requestParameters['nextToken'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}/events`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPipelineEventsResponseFromJSON(jsonValue));
    }

    /**
     * Get pipeline events
     */
    async getPipelineEvents(requestParameters: GetPipelineEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPipelineEventsResponse> {
        const response = await this.getPipelineEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get pipeline metrics
     */
    async getPipelineMetricsRaw(requestParameters: GetPipelineMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPipelineMetricsResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling getPipelineMetrics().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling getPipelineMetrics().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}/metrics`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPipelineMetricsResponseFromJSON(jsonValue));
    }

    /**
     * Get pipeline metrics
     */
    async getPipelineMetrics(requestParameters: GetPipelineMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPipelineMetricsResponse> {
        const response = await this.getPipelineMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all existing pipelines
     */
    async getPipelinesRaw(requestParameters: GetPipelinesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPipelinesResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling getPipelines().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPipelinesResponseFromJSON(jsonValue));
    }

    /**
     * Get all existing pipelines
     */
    async getPipelines(requestParameters: GetPipelinesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPipelinesResponse> {
        const response = await this.getPipelinesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve documents from a pipeline
     */
    async retrieveDocumentsRaw(requestParameters: RetrieveDocumentsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RetrieveDocumentsResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling retrieveDocuments().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling retrieveDocuments().'
            );
        }

        if (requestParameters['retrieveDocumentsRequest'] == null) {
            throw new runtime.RequiredError(
                'retrieveDocumentsRequest',
                'Required parameter "retrieveDocumentsRequest" was null or undefined when calling retrieveDocuments().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}/retrieval`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RetrieveDocumentsRequestToJSON(requestParameters['retrieveDocumentsRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RetrieveDocumentsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve documents from a pipeline
     */
    async retrieveDocuments(requestParameters: RetrieveDocumentsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RetrieveDocumentsResponse> {
        const response = await this.retrieveDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start a deep research
     */
    async startDeepResearchRaw(requestParameters: StartDeepResearchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StartDeepResearchResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling startDeepResearch().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling startDeepResearch().'
            );
        }

        if (requestParameters['startDeepResearchRequest'] == null) {
            throw new runtime.RequiredError(
                'startDeepResearchRequest',
                'Required parameter "startDeepResearchRequest" was null or undefined when calling startDeepResearch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}/deep-research`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StartDeepResearchRequestToJSON(requestParameters['startDeepResearchRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StartDeepResearchResponseFromJSON(jsonValue));
    }

    /**
     * Start a deep research
     */
    async startDeepResearch(requestParameters: StartDeepResearchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StartDeepResearchResponse> {
        const response = await this.startDeepResearchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start a pipeline
     */
    async startPipelineRaw(requestParameters: StartPipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StartPipelineResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling startPipeline().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling startPipeline().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}/start`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StartPipelineResponseFromJSON(jsonValue));
    }

    /**
     * Start a pipeline
     */
    async startPipeline(requestParameters: StartPipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StartPipelineResponse> {
        const response = await this.startPipelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Stop a pipeline
     */
    async stopPipelineRaw(requestParameters: StopPipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StopPipelineResponse>> {
        if (requestParameters['organization'] == null) {
            throw new runtime.RequiredError(
                'organization',
                'Required parameter "organization" was null or undefined when calling stopPipeline().'
            );
        }

        if (requestParameters['pipeline'] == null) {
            throw new runtime.RequiredError(
                'pipeline',
                'Required parameter "pipeline" was null or undefined when calling stopPipeline().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/org/{organization}/pipelines/{pipeline}/stop`.replace(`{${"organization"}}`, encodeURIComponent(String(requestParameters['organization']))).replace(`{${"pipeline"}}`, encodeURIComponent(String(requestParameters['pipeline']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StopPipelineResponseFromJSON(jsonValue));
    }

    /**
     * Stop a pipeline
     */
    async stopPipeline(requestParameters: StopPipelineRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StopPipelineResponse> {
        const response = await this.stopPipelineRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
