#!/bin/sh -l

ls -la
sh -c "npx sapper export --legacy $*"
