#!/usr/bin/env bash

SWITCHED=false
(./bin/sass) &
(./bin/jade) &
(NODE_ENV=dev ./bin/watchify) &
cd app && SWITCHED=true
python -m SimpleHTTPServer

function finish {
    if [ $SWITCHED ]
    then
        cd ..;
    fi
}

trap finish EXIT