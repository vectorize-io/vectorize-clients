#!/bin/bash
set -e
ROOT_DIR=$(git rev-parse --show-toplevel)
SRC_DIR=$ROOT_DIR/src

version=$1
if [[ -z "$version" ]]; then
  echo "Usage: release-python.sh <version>"
  exit 1
fi

current_version=$(npm run read-toml $SRC_DIR/python/pyproject.toml tool.poetry version | tail -n 1 | tr -d '[:space:]')
IFS='.' read -r major minor patch <<< "$current_version"
echo "Current version is $major"
if [[ $version == "minor" ]]; then
  version="$major.$((minor+1)).0"
elif [[ $version == "major" ]]; then
  version="$((major+1)).0.0"
elif [[ $version == "patch" ]]; then
  version="$major.$minor.$((patch+1))"
fi
if [[ ! $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Version must be in the format x.y.z"
  exit 1
fi

npm run edit-toml $SRC_DIR/python/pyproject.toml tool.poetry version $version
git commit -am "Release python client $version"
git push origin main
git tag -a "python-$version" -m "Release python client $version"
git push origin "python-$version"
echo "Release python client $version committed and tagged"


