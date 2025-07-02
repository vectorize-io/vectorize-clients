# Vectorize Client
Node Api Client for [Vectorize](https://vectorize.io).
For the full documentation, please visit [docs.vectorize.io](https://docs.vectorize.io/api/api-getting-started).

## Installation
```sh
npm install @vectorize-io/vectorize-client
```

## Getting Started

List all your pipelines:

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

Visit [docs.vectorize.io](https://docs.vectorize.io/api/api-getting-started) to learn more about the API.