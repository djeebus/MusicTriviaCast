/// <reference path="cast.ts" />
/// <reference path="echonest.ts" />
/// <reference path="tsd.d.ts" />

var apiKey = "IXCAIHRXWJVZZ0P9H";
var consumerKey = "51de6a513f4fe422c727dda6eec01204";
var sharedSecret = "6Dkryjg5RNKsUTyooxcYQA";

var client = new EchoNestClient(apiKey);
client.searchArtist('third eye blind')
    .then(function (result) {
        alert('success!');
    })
    .fail(function (err) {
        alert('failed!');
    });


var castManager = new CastManager(8);
castManager.start();
