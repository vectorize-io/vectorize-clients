# Vectorize Clients
This repository contains source and test code for Vectorize clients in different languages.

The clients are generated automatically using OpenAPI generator, starting from the OpenAPI specification in the `vectorize_api.json` file that is downloaded from the [Vectorize Platform endpoint](https://platform.vectorize.io/api/openapi).

## How to
- Python
  - [Getting started](./src/python/README.md)
  - [Docs](https://vectorize-io.github.io/vectorize-clients/python/)
- TypeScript
  - [Getting started](./src/ts/README.md)
  - [Docs](https://vectorize-io.github.io/vectorize-clients/ts/)



## Generate and release clients
To generate a client, run the following command:

```bash
npm install

npm run generate:ts
npm run generate:python
```

To release a client, run the following command:

```bash
npm install

npm run release:ts
npm run release:python
```



