#!/bin/bash

set -e -o pipefail

# INSTALL
echo "Installing legacy SDK dependencies"
npm install

echo "Installing modular SDK dependencies"
npm run bootstrap

# CLEAN
echo "Cleaning modular directories"
npm run grunt:concurrent -- --no-color --stack clean

# BUILD
echo "Building modules"
NODE_ENV=production npm run build

# PUBLISH
echo "Publish to npm"
# Lerna does not current have a non-interactive mode
npm run script -- "lerna publish"

echo "Tricking npm into updating the README"
echo "TODO"