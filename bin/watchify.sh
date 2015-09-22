#!/usr/bin/env bash

./bin/installDeps

watchify -o app/bundle.js -v -d app
