#!/bin/bash
set -e
ROOT_DIR=$(git rev-parse --show-toplevel)
SRC_DIR=$ROOT_DIR/src

PYPROJECT=$SRC_DIR/python/pyproject.toml
current_version=$(node -p "require('./package.json').version")

rm -rf $SRC_DIR/python
openapi-generator-cli generate -i $ROOT_DIR/vectorize_api.json -g python -o $SRC_DIR/python \
  --additional-properties=packageName=vectorize_client \
  --additional-properties=generateSourceCodeOnly=false



npm run edit-toml $PYPROJECT tool.poetry version $current_version
npm run edit-toml $PYPROJECT tool.poetry name vectorize-client
npm run edit-toml $PYPROJECT tool.poetry description "Python client for the Vectorize API"
npm run edit-toml $PYPROJECT tool.poetry authors "Vectorize <contact@vectorize.io>" list
npm run edit-toml $PYPROJECT tool.poetry license MIT
npm run edit-toml $PYPROJECT tool.poetry repository "https://github.com/vectorize-io/vectorize-clients"
npm run edit-toml $PYPROJECT tool.poetry homepage "https://vectorize.io"
npm run edit-toml $PYPROJECT tool.poetry keywords "vectorize, vectorize.io, generative-ai, embeddings, rag" list

cp $ROOT_DIR/scripts/python_README.md $SRC_DIR/python/README.md









