'use strict';

var riot = require('riot'),
    headerView = require('./views/header/template.tag');

// need to require all nested tags for them to be in scope
require('./views/navigation/template.tag');

init();

function init() {
    riot.mount(headerView);
}

