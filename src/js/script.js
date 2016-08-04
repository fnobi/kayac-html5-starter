import riot from "riot";

// riot tags
require('./tags/gheader.tag');
require('./tags/page-title.tag');
require('./tags/todo.tag');
require('./tags/add-button.tag');
require('./tags/detail.tag');

// mount: gheader
riot.mount('gheader');

// mount: main
riot.route('', function () {
    riot.mount('main', 'todo');
});

riot.route('todo/*', function (id) {
    riot.mount('main', 'detail', {
        id: id
    });
});

riot.route.start(true);
