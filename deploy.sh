#!/usr/bin/env bash
git add . && git commit . -m "deploy" && npm version $1 && git push origin master:deploy