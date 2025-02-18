#!/bin/bash
#npm install @openapitools/openapi-generator-cli -g
version=0.0.1


openapi-generator-cli generate -i vectorize_api.json -g python -o clients/python \
  --additional-properties=library=asyncio \
  --additional-properties=packageName=vectorize_client \
  --additional-properties=packageVersion=$version \
  --additional-properties=projectName=vectorize-client \
  --additional-properties=generateSourceCodeOnly=false


