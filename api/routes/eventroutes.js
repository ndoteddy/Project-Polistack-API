'use strict';
module.exports = function(app) {
    var event = require('../controllers/eventcontroller');

    // todoList Routes
    app.route('/event')
        .get(event.list_all_events)
        .post(event.create_a_event);


   //app.route('/event/:taskId')
     //   .get(event.read_a_event())
       // .put(event.update_a_event())
        //.delete(event.delete_a_event());
};
