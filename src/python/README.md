from dataclasses import field

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

## Usage

First, export your token and org id as environment variables:

```sh
export VECTORIZE_TOKEN=<your-token>
export VECTORIZE_ORG=<your-org-id>
```
Then, initialize the client with your token and org id:

```python
import os
TOKEN = os.environ['VECTORIZE_TOKEN']
ORG = os.environ['VECTORIZE_ORG']
```

### Extraction

Set the file you want to extract data from:

```sh
export FILE=<path-to-file>
```

Then, run the following code:
```python
import os
import vectorize_client as v
import time, logging

TOKEN = os.environ['VECTORIZE_TOKEN']
ORG = os.environ['VECTORIZE_ORG']
FILE = os.environ['FILE']

with v.ApiClient(v.Configuration(access_token=TOKEN)) as api:
    with open(FILE, 'rb') as file:
        data = file.read()
        extraction_id = v.ExtractionApi(api).start_extraction(ORG, data).extraction_id
        print(f"Extraction started with id {extraction_id}")
        while True:
            extraction = v.ExtractionApi(api).get_extraction_result(ORG, extraction_id)
            if extraction.ready:
                extracted_data = extraction.data
                if extracted_data.success:
                    print(extracted_data)
                    break
                else:
                    raise Exception(extracted_data.error)
            print("Waiting for extraction to complete...")
            time.sleep(1)
```


