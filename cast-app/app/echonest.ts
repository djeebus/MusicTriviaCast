/// <reference path="P.ts" />
/// <reference path="tsd.d.ts" />

class EchoNestClient {
    spotifyUrl = "https://developer.echonest.com/api/v4";

    constructor(public apiKey: string) {
    }

    searchArtist(name: string) {
        var d = P.defer();

        $.ajax({
            url: this.spotifyUrl + "/artist/search",
            data: {
                api_key: this.apiKey,
                name: name,
            },
            success: function (data) {
                d.resolve(data);
            },
            error: function (r) {
                d.reject({
                    message: 'request failed',
                });
            },
        });

        return d.promise();
    }
}
