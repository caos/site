#!/bin/sh -l

set -e

ls -la

t=""
for dir in */; do
  t="$t $dir"
done
echo "$t"

npm install
sh -c "npx sapper export --legacy $*  --entry $t"
