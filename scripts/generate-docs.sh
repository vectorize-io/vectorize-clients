#!/bin/bash
set -e
ROOT_DIR=$(git rev-parse --show-toplevel)
cd $ROOT_DIR
OUTPUT_DIR=$ROOT_DIR/gen-docs
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR
cd $ROOT_DIR/src/ts
npx typedoc --out $OUTPUT_DIR/ts
cd ../python
poetry run pip install pdoc
poetry run pdoc vectorize_client --output-dir $OUTPUT_DIR/python

