#!/bin/sh -l

set -e

args=$@

echo "entrypoint log"
ls -la

pwd

# loop over docs folder
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

echo "{ "environment": { "BASEPATH": "$args[1]" } }"

# copy static and manifest
HOMEPAGE=docs/index.svelte
if [ -f "$HOMEPAGE" ]; then
    echo "$HOMEPAGE exist, copy to routes"
    cp -p docs/index.svelte /app/src/routes/[lang]/index.svelte
else
    echo "$HOMEPAGE doesn't exist"
    exit 1
fi

DIR=docs/static
if [ -d "$DIR" ]; then
    echo "$DIR exist, copy to root"
    cp -pr docs/static /app/
else
    echo "$DIR folder doesn't exist"
    exit 1
fi

cd /app

echo "run npx export with $args"
sh -c "npx sapper export --legacy $args"

echo "copy export files"
cp -rp /app/__sapper__ /github/workspace
