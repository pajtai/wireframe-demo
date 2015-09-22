'use strict';

var riot = require('riot'),
    appView = require('./views/app/template.tag');

// need to require all nested tags for them to be in scope
require('./views/header/template.tag')
require('./views/navigation/template.tag');
require('./views/list/template.tag');

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
    riot.mount(appView, appState);
}

