# Vectorize Client
Python Api Client for [Vectorize](https://vectorize.io).
For the full documentation, please visit [docs.vectorize.io](https://docs.vectorize.io/api/api-getting-started).


## Installation
```sh
pip install vectorize-client
```

Then import the package:
```python
import vectorize_client
```

## Getting Started

List all your pipelines:
```python
import vectorize_client as v

TOKEN = '<your-token>'
ORG = '<your-org-id>'

with v.ApiClient(v.Configuration(access_token=TOKEN)) as api:
    pipelines = v.PipelinesApi(api)
    response = pipelines.get_pipelines(ORG)
    print("Found" + str(len(response.data)) + " pipelines")
```

Visit [docs.vectorize.io](https://docs.vectorize.io/api/api-getting-started) to learn more about the API.

