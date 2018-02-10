'use strict';
module.exports = function(app) {
    var event = require('../controllers/event_controller');
    var scrappingmovie = require('../controllers/event_scrapper_controller');
    // todoList Routes
    app.route('/event')
        .get(event.list_all_events)
        .post(event.create_a_event);

    // list Movie Routes
    app.route('/event/scrapping')
        .get(scrappingmovie.list_all_event_scrapping);
};
