#!/bin/bash
set -e
ROOT_DIR=$(git rev-parse --show-toplevel)
cd $ROOT_DIR
OUTPUT_DIR=$ROOT_DIR/gen-docs
rm -rf $OUTPUT_DIR
mkdir -p $OUTPUT_DIR
cd $ROOT_DIR/src/ts
# Pin typedoc and the TypeScript it runs against. Unpinned, npx fetches the
# latest typedoc, which pulls TypeScript 6 as its peer; TS 6 turns this
# package's ES5 target and node10 moduleResolution into hard errors, so the
# docs deploy has failed on every push to main since at least 2026-08-20.
# 5.7.3 matches the TypeScript the library itself builds with.
npx -y -p typescript@5.7.3 -p typedoc@0.28.20 typedoc --out $OUTPUT_DIR/ts
cd ../python
poetry run pip install pdoc
poetry run pdoc vectorize_client --output-dir $OUTPUT_DIR/python

