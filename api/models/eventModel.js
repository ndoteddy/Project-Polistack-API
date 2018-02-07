'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    eventTitle: {
        type: String
    },
    address: {
        type: String
    },
    desc: {
        type: String
    },
    totalGuest: {
        type: String
    },
    createdDate: {
        type: String
    },
    venueName: {
        type: String
    },
    organizerName: {
        type: String
    }

});


var eventSchema = mongoose.model('EventSchema', EventSchema,'Event');

module.exports={
    EventSchema:eventSchema

};