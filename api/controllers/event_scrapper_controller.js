
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

exports.list_all_event_scrapping = function(req,res) {

    url = 'http://www.allconferences.com/search/index/Venue__country:Hong+Kong/Venue__city:Hong+Kong/Venue__name:Asia+World+Expo';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var eventTitle, venue, location;
            var json = { event:[]};



            $('.conferenceHead').each(function(index, element){

                var data = $(this);
                console.log(data);
                eventTitle = data.children().first().text();
                json.event.push({
                    eventTitle: eventTitle
                });

            })

            // $('.venue_info').each(function(index, element) {
            //     var venueInfo = $(this);
            //     venue = venueInfo.children("a").text();
            // })


        }
        else
        {
            console.log(error);
        }
        res.json(json);


    }) ;
};

