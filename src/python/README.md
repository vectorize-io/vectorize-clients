# Vectorize Clients

<p align="center">
  <a href="https://pypi.org/project/vectorize-client/">
    <img src="https://img.shields.io/pypi/v/vectorize-client?color=green&amp;label=Version" alt="PyPI">
  </a>
  <a href="https://pepy.tech/project/vectorize-client">
    <img src="https://img.shields.io/pypi/dw/vectorize-client?label=pypi" alt="Pypi">
  </a>
  <a href="https://pepy.tech/project/vectorize-client">
    <img src="https://img.shields.io/npm/dw/%40vectorize-io%2Fvectorize-client?label=NPM" alt="NPM">
  </a>
</p>

This repository contains source and test code for **Vectorize** clients in different languages.

The clients are generated automatically using OpenAPI generator, starting from the OpenAPI specification in the `vectorize_api.json` file that is downloaded from the [Vectorize Platform OpenAPI endpoint](https://platform.vectorize.io/api/openapi).


## How to
- Python
  - [Getting started](./src/python/README.md)
  - [Official documentation](https://docs.vectorize.io/api/api-getting-started)
  - [Code Reference](https://vectorize-io.github.io/vectorize-clients/python/vectorize_client/api.html)
- TypeScript
  - [Getting started](./src/ts/README.md)
  - [Official documentation](https://docs.vectorize.io/api/api-getting-started)
  - [Code Reference](https://vectorize-io.github.io/vectorize-clients/ts/)



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



