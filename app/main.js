'use strict';

var wireframe = require('wireframe-ui/client');


init();

function init() {
    var appState = {
            title : 'Project Title',
            nav_items : [
                'Home',
                'Gallery',
                'About'
            ],
            list1 : [
                'So much list',
                'List is so list',
                'Many words'
            ],
            list2 : [
                'Such list',
                'List is much list'
            ]
        };

    wireframe.start(appState);
}

