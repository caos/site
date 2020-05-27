#!/bin/sh -l

set -e

ls -la
cd docs/
t=""
for dir in */
do
    dir=${dir%*/}
    t="$dir $t"
done
t=${t%?}
echo "$t"

cd ..
npm install
echo "npx sapper export --legacy $* --entry \"$t\""
sh -c "npx sapper export --legacy $* --entry \"$t\""
