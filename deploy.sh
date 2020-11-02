#!/bin/bash
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

message="Publishing website version ${PACKAGE_VERSION}"
echo $message

cd dist
git add *
git commit -m "$message"
git push origin website
