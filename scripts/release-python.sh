#!/bin/bash
set -e
version=$1
if [[ -z "$version" ]]; then
  echo "Usage: release-python.sh <version>"
  exit 1
fi
if [[ ! $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Version must be in the format x.y.z"
  exit 1
fi
ROOT_DIR=$(git rev-parse --show-toplevel)
SRC_DIR=$ROOT_DIR/src
npm run edit-toml $SRC_DIR/python/pyproject.toml tool.poetry version $version
git commit -am "Release python client $version"
git tag -a "python-$version" -m "Release python client $version"
git push origin "python-$version"
echo "Release python client $version committed and tagged"


