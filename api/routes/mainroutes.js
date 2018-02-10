'use strict';
module.exports = function(app) {
    var event = require('../controllers/eventcontroller');
    var scrappingmovie = require('../controllers/scrappingcontroller');
    // todoList Routes
    app.route('/event')
        .get(event.list_all_events)
        .post(event.create_a_event);

    // list Movie Routes
    app.route('/movielist')
        .get(scrappingmovie.list_movie);
};
