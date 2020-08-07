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


# copy config
CONFIG=docs/config.js
if [ -f "$CONFIG" ]; then
    echo "$CONFIG exist, copy to routes"
    cp -p $CONFIG /app/config.js
else
    echo "$CONFIG doesn't exist"
    exit 1
fi

DIR=docs/messages
if [ -d "$DIR" ]; then
    echo "$DIR exist, copy to root"
    cp -pr $DIR /app/
else
    echo "$DIR folder doesn't exist"
    exit 1
fi

# copy static and manifest
HOMEPAGE=docs/index.svelte
if [ -f "$HOMEPAGE" ]; then
    echo "$HOMEPAGE exist, copy to routes"
    cp -p $HOMEPAGE /app/src/routes/index.svelte
else
    echo "$HOMEPAGE doesn't exist"
    exit 1
fi

DIR=docs/static
if [ -d "$DIR" ]; then
    echo "$DIR exist, copy to root"
    cp -pr $DIR /app/
else
    echo "$DIR folder doesn't exist"
    exit 1
fi

cd /app

echo "run npx export with $args"
sh -c "npx sapper export --legacy $args"

echo "copy export files"
cp -rp /app/__sapper__ /github/workspace
