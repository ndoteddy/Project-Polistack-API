
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

exports.list_event_scrapping = function(req,res) {

    url = 'http://www.allconferences.com/search/index/Venue__country:Hong+Kong/Venue__city:Hong+Kong/Venue__name:Asia+World+Expo';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var eventTitle, venue, tag;
            var json = { eventTitle : "", Venue : "", Tag : ""};

            $('.conferenceHead').filter(function(){
                var data = $(this);
                console.log(data);
                eventTitle = data.children().first().text();
                venue = data.children(1).text();

                json.eventTitle = eventTitle;

            })

            $('.venue_info').filter(function(){
                var data = $(this);

                venue = data.children().first().text();
                json.Venue = venue;
                json.tag= tag;
            })


        }
        else
        {
            console.log(error);
        }
        res.json(json);


    }) ;
};

