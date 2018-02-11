'use strict';
module.exports = function(app) {
    var event = require('../controllers/event_controller');
    var scrappingExternalEvent = require('../controllers/event_scrapper_controller');
    // to event controller (mongo database data)
    app.route('/event')
        .get(event.list_all_events)
        .post(event.create_a_event);

    // to scrapping controller (external website data)
    app.route('/event/scrapping')
        .get(scrappingExternalEvent.list_all_event_scrapping);
};
