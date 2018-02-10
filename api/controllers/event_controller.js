'use strict'

var mongoose = require ('mongoose'),
    EventSchema = mongoose.model('EventSchema');

exports.list_all_events = function(req,res) {
    EventSchema.find({}, function (err, signature) {
        if (err)
            res.send(err);
        res.json(signature);
    });
};

exports.create_a_event = function(req,res) {
    var eventSchema = new EventSchema({
        eventTitle: req.body.eventTitle,
        address: req.body.address,
        desc: req.body.desc,
        totalGuest: req.body.totalGuest,
        createdDate: req.body.createdDate,
        venueName: req.body.venueName,
        organizerName: req.body.organizerName,
    });
    eventSchema.save(function(err, sign) {
        if (err)
            res.send(err);
        res.json(sign);
    });
};
