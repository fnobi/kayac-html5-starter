const riot = require('riot');

require('./tags/gheader.tag');
require('./tags/page-title.tag');
require('./tags/todo.tag');
require('./tags/detail.tag');

// gheader
riot.mount('gheader');

// main
riot.route(function (tagName) {
    console.log(tagName);
});

riot.route('', function () {
    riot.mount('main', 'todo');
});

riot.route('todo/*', function (id) {
    riot.mount('main', 'detail', {
        id: id
    });
});

riot.route.start(true);
