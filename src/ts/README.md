# Vectorize Client
Typescript Api Client for Vectorize
For more information, please visit [https://vectorize.io](https://vectorize.io)

## Installation & Usage
```sh
npm install @vectorize-io/vectorize-client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```typescript

import {Configuration, PipelinesApi} from "@vectorize-io/vectorize-client";
const connectorsApi = new ConnectorsApi(new Configuration({
        accessToken: "token",
    }));
const pipelines = connectorsApi.getPipelines({
    organization: "your-org"
})
console.log(pipelines)
```

## Documentation for API Endpoints

All URIs are relative to *https://api.vectorize.io/v1*

See the full [reference](https://vectorize.readme.io/reference) for more information.
