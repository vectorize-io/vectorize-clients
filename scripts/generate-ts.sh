#!/bin/bash
set -e
ROOT_DIR=$(git rev-parse --show-toplevel)
SRC_DIR=$ROOT_DIR/src

PACKAGE_JSON=$SRC_DIR/ts/package.json
cd $SRC_DIR/ts
current_version=$(npm pkg get version | tr -d '"')
cd ../../

rm -rf $SRC_DIR/ts
openapi-generator-cli generate -i $ROOT_DIR/vectorize_api.json -g typescript-fetch -o $SRC_DIR/ts \
  --additional-properties=npmName=@vectorize-io/vectorize-client \
  --additional-properties=licenseName=MIT \
  --additional-properties=npmRepository="https://github.com/vectorize-io/vectorize-clients" \
  --additional-properties=snapshot=true \
  --additional-properties=generateSourceCodeOnly=false

edit_field() {
  local field=$1
  local value=$2
  npm pkg set "$field"="$value" --prefix $SRC_DIR/ts

}
set -x

edit_field description "Client for the Vectorize API"
edit_field author "Vectorize <contact@vectorize.io>"
edit_field repository.url "https://github.com/vectorize-io/vectorize-clients"
edit_field scripts.preinstall "npm install typescript"
edit_field publishConfig.registry "https://registry.npmjs.org"
edit_field publishConfig.access "public"
edit_field license "MIT"
edit_field keywords "vectorize, vectorize.io, generative-ai, embeddings, rag"
edit_field version $current_version


cp $ROOT_DIR/scripts/ts_README.md $SRC_DIR/ts/README.md









