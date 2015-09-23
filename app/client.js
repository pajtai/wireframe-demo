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
            ],
            handlers : {
                open_modal : open_modal
            }
        };

    wireframe.start(appState);
}

function open_modal() {
    wireframe.trigger('modal:open', {
        title : 'Sign up now!',
        content: 'To buy things, you must first complete our 30 step sign up process.'
    });
}
