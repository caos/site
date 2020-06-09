#!/bin/sh -l

set -e

# lopp over docs folder

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

# copy static and manifest
HOMEPAGE=docs/index.svelte
if [ -f "$HOMEPAGE" ]; then
    echo "$HOMEPAGE exist, copy to routes"
    cp docs/index.svelte src/routes/[lang]/index.svelte
else
    echo "$HOMEPAGE doesn't exist"
    exit 1
fi

DIR=docs/static
if [ -d "$DIR" ]; then
    echo "$DIR exist, copy to root"
    cp -r docs/static .
else
    echo "$DIR folder doesn't exist"
    exit 1
fi

ls -la

echo "npx sapper export --legacy $* --entry \"$t\""
sh -c "npx sapper export --legacy $* --entry \"$t\""
