'use strict';

var riot = require('riot'),
    appView = require('./views/app/template.tag');

// need to require all nested tags for them to be in scope
require('./views/header/template.tag')
require('./views/navigation/template.tag');
require('./views/list/template.tag');

init();

function init() {
    riot.mount(appView);
}

