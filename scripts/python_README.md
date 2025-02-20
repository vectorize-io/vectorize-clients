# Vectorize Client
Python Api Client for Vectorize
For more information, please visit [https://vectorize.io](https://vectorize.io)

## Requirements.

Python 3.8+

## Installation & Usage
```sh
pip install vectorize-client
```

Then import the package:
```python
import vectorize_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
import vectorize_client as v

TOKEN = '<your-token>'
ORG = '<your-org-id>'

with v.ApiClient(v.Configuration(access_token=TOKEN)) as api:
    pipelines = v.PipelinesApi(api)
    response = pipelines.get_pipelines(ORG)
    print("Found" + str(len(response.data)) + " pipelines")
```

## Documentation for API Endpoints

All URIs are relative to *https://api.vectorize.io/v1*

See the full [reference](https://vectorize.readme.io/reference) for more information.
