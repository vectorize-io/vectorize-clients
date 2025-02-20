#!/bin/bash
set -e
version=$1
if [[ -z "$version" ]]; then
  echo "Usage: release-ts.sh <version>"
  exit 1
fi
if [[ ! $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Version must be in the format x.y.z"
  exit 1
fi
ROOT_DIR=$(git rev-parse --show-toplevel)
SRC_DIR=$ROOT_DIR/src
# set package version
npm version $version --prefix $SRC_DIR/ts
git commit -am "Release ts client $version"
git tag -a "ts-$version" -m "Release ts client $version"
git push origin "ts-$version"
echo "Release ts client $version committed and tagged"


