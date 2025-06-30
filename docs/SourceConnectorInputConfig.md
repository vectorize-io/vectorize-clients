# SourceConnectorInputConfig

Configuration specific to the connector type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_extensions** | **List[str]** | File Extensions | 
**idle_time** | **float** | Check for updates every (seconds) | [default to 5]
**recursive** | **bool** | Recursively scan all folders in the bucket | [optional] 
**path_prefix** | **str** | Read starting from this folder (optional). Example: Enter Folder path: /exampleFolder/subFolder | [optional] 
**path_metadata_regex** | **str** | Path Metadata Regex | [optional] 
**path_regex_group_names** | **str** | Path Regex Group Names. Example: Enter Group Name | [optional] 
**spaces** | **str** | Spaces. Example: Spaces to include (name, key or id) | 
**root_parents** | **str** | Restrict ingest to these folder URLs (optional). Example: Enter Folder URLs. Example: https://drive.google.com/drive/folders/1234aBCd5678_eFgH9012iJKL3456opqr | [optional] 
**emoji** | **str** | Emoji Filter. Example: Enter custom emoji filter name | [optional] 
**author** | **str** | Author Filter. Example: Enter author name | [optional] 
**ignore_author** | **str** | Ignore Author Filter. Example: Enter ignore author name | [optional] 
**limit** | **float** | Limit. Example: Enter limit | [optional] [default to 10000]
**thread_message_inclusion** | **str** | Thread Message Inclusion | [optional] [default to 'ALL']
**filter_logic** | **str** | Filter Logic | [optional] [default to 'AND']
**thread_message_mode** | **str** | Thread Message Mode | [optional] [default to 'CONCATENATE']
**endpoint** | **str** | Endpoint. Example: Choose which api endpoint to use | [default to 'Crawl']
**request** | **object** | Request Body. Example: JSON config for firecrawl&#39;s /crawl or /scrape endpoint. | 
**created_at** | **date** | Created After. Filter for conversation created after this date. Example: Enter a date: Example 2012-12-31 | 
**updated_at** | **date** | Updated After. Filter for conversation updated after this date. Example: Enter a date: Example 2012-12-31 | [optional] 
**state** | **List[str]** | State | [optional] 
**select_resources** | **str** | Select Notion Resources | 
**database_ids** | **str** | Database IDs | 
**database_names** | **str** | Database Names | 
**page_ids** | **str** | Page IDs | 
**page_names** | **str** | Page Names | 
**sites** | **str** | Site Name(s). Example: Filter by site name. All sites if empty. | [optional] 
**allowed_domains_opt** | **str** | Additional Allowed URLs or prefix(es). Add one or more allowed URLs or URL prefixes. The crawler will read URLs that match these patterns in addition to the seed URL(s).. Example: (e.g. https://docs.example.com) | [optional] 
**forbidden_paths** | **str** | Forbidden Paths. Example: Enter forbidden paths (e.g. /admin) | [optional] 
**min_time_between_requests** | **float** | Throttle (ms). Example: Enter minimum time between requests in milliseconds | [optional] [default to 500]
**max_error_count** | **float** | Max Error Count. Example: Enter maximum error count | [optional] [default to 5]
**max_urls** | **float** | Max URLs. Example: Enter maximum number of URLs to crawl | [optional] [default to 1000]
**max_depth** | **float** | Max Depth. Example: Enter maximum crawl depth | [optional] [default to 50]
**reindex_interval_seconds** | **float** | Reindex Interval (seconds). Example: Enter reindex interval in seconds | [optional] [default to 3600]
**repositories** | **str** | Repositories. Example: Example: owner1/repo1 | 
**include_pull_requests** | **bool** | Include Pull Requests | [default to True]
**pull_request_status** | **str** | Pull Request Status | [default to 'all']
**pull_request_labels** | **str** | Pull Request Labels. Example: Optionally filter by label. E.g. fix | [optional] 
**include_issues** | **bool** | Include Issues | [default to True]
**issue_status** | **str** | Issue Status | [default to 'all']
**issue_labels** | **str** | Issue Labels. Example: Optionally filter by label. E.g. bug | [optional] 
**max_items** | **float** | Max Items. Example: Enter maximum number of items to fetch | [default to 1000]
**created_after** | **date** | Created After. Filter for items created after this date. Example: Enter a date: Example 2012-12-31 | [optional] 
**start_date** | **date** | Start Date. Include meetings from this date forward. Example: Enter a date: Example 2023-12-31 | 
**end_date** | **date** | End Date. Include meetings up to this date only. Example: Enter a date: Example 2023-12-31 | [optional] 
**title_filter_type** | **str** |  | [default to 'AND']
**title_filter** | **str** | Title Filter. Only include meetings with this text in the title. Example: Enter meeting title | [optional] 
**participant_filter_type** | **str** |  | [default to 'AND']
**participant_filter** | **str** | Participant&#39;s Email Filter. Include meetings where these participants were invited. Example: Enter participant email | [optional] 
**max_meetings** | **float** | Max Meetings. Enter -1 for all available meetings, or specify a limit. Example: Enter maximum number of meetings to retrieve. (-1 for all) | [optional] [default to -1]

## Example

```python
from vectorize_client.models.source_connector_input_config import SourceConnectorInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SourceConnectorInputConfig from a JSON string
source_connector_input_config_instance = SourceConnectorInputConfig.from_json(json)
# print the JSON string representation of the object
print(SourceConnectorInputConfig.to_json())

# convert the object into a dict
source_connector_input_config_dict = source_connector_input_config_instance.to_dict()
# create an instance of SourceConnectorInputConfig from a dict
source_connector_input_config_from_dict = SourceConnectorInputConfig.from_dict(source_connector_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


