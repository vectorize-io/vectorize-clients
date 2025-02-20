#!/bin/bash
set -e
ROOT_DIR=$(git rev-parse --show-toplevel)
SRC_DIR=$ROOT_DIR/src

PACKAGE_JSON=$SRC_DIR/ts/package.json
#current_version=$(npm run read-toml $PYPROJECT tool.poetry version | tail -n 1 | tr -d '[:space:]')

rm -rf $SRC_DIR/ts
openapi-generator-cli generate -i $ROOT_DIR/vectorize_api.json -g typescript-fetch -o $SRC_DIR/ts \
  --additional-properties=npmName=@vectorize-io/vectorize-client \
  --additional-properties=licenseName=MIT \
  --additional-properties=npmRepository="https://github.com/vectorize-io/vectorize-clients" \
  --additional-properties=snapshot=true \
  --additional-properties=generateSourceCodeOnly=false



cp $ROOT_DIR/scripts/ts_README.md $SRC_DIR/ts/README.md









