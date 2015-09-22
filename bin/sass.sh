#!/usr/bin/env bash

./bin/installDeps

node-sass app/style.scss --source-map app/style.map app/style.css

postcss --use autoprefixer -o app/style.css app/style.css

(watch  ./bin/sassAutoprefixerWatch app/sass)
