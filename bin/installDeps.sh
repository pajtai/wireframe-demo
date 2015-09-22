#!/usr/bin/env bash

if ! command -v browserify >/dev/null 2>&1
    then
        npm install -g browserify
    fi

if ! command -v node-sass >/dev/null 2>&1
    then
        npm install -g node-sass
    fi

if ! command -v jade >/dev/null 2>&1
    then
        npm install -g jade
    fi

if ! command -v exorcist >/dev/null 2>&1
    then
        npm install -g exorcist
    fi

if ! command -v postcss >/dev/null 2>&1
then
    npm install -g postcss-cli autoprefixer
fi

if ! command -v watch >/dev/null 2>&1
then
    npm install -g watch
fi

if ! command -v watchify >/dev/null 2>&1
then
    npm install -g watchify
fi