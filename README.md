# Vectorize Clients
This repository contains source and test code for Vectorize clients in different languages.

The clients are generated automatically using OpenAPI generator, starting from the OpenAPI specification in the `vectorize_api.json` file that is downloaded from the [Vectorize Platform endpoint](https://platform.vectorize.io/api/openapi).

## Generate clients
To generate a client, run the following command:

```bash
npm install

npm run generate:ts
npm run generate:python
```

## Release clients
To release a client, run the following command:

```bash
npm install

npm run release:ts
npm run release:python
```


