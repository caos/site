#!/bin/sh -l

set -e

ls -la
npm install
sh -c "npx sapper export --legacy $*"
