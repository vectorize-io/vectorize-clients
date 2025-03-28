#!/bin/bash
set -e
version=$1
if [[ -z "$version" ]]; then
  echo "Usage: release-ts.sh <version>"
  exit 1
fi

ROOT_DIR=$(git rev-parse --show-toplevel)
SRC_DIR=$ROOT_DIR/src
current_version=$(npm pkg get version --prefix $SRC_DIR/ts | tr -d '"')

IFS='.' read -r major minor patch <<< "$current_version"
echo "Current version: $current_version"
if [[ $version == "minor" ]]; then
  version="$major.$((minor+1)).0"
elif [[ $version == "major" ]]; then
  version="$((major+1)).0.0"
elif [[ $version == "patch" ]]; then
  version="$major.$minor.$((patch+1))"
fi
echo "New version: $version"
if [[ ! $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Version must be in the format x.y.z"
  exit 1
fi

read -p "Release ts client $version? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Aborting release"
  exit 1
fi


npm version $version --prefix $SRC_DIR/ts
git commit -am "Release ts client $version"
git push origin main
git tag -a "ts-$version" -m "Release ts client $version"
git push origin "ts-$version"
echo "Release ts client $version committed and tagged"


