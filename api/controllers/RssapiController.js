/**
 * RssapiController
 *
 * @description :: Server-side logic for managing rssapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var FeedParser = require('feedparser');
var request = require('request');
module.exports = {

    consultar: function(req, res) {
        noticias = []
        var params = req.allParams();

        Interes.find({
                id: params.identificador
            })
            .populate('feeds')
            .exec(function(err, intereses) {
                if (err) return res.negotiate(err);
                console.log(intereses);
                if (intereses) {
                    if (intereses[0]) {
                        if (intereses[0].feeds[0]) {
                            var req = request(intereses[0].feeds[0].url),
                                feedparser = new FeedParser();

                            req.on('error', function(error) {
                                // handle any request errors
                                console.log('Error');
                                console.log(error);
                            });


                            req.on('response', function(res) {
                                var stream = this;

                                if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

                                stream.pipe(feedparser);

                            });

                            feedparser.on('error', function(error) {
                                // always handle errors
                                console.log('error');
                                console.log(error);
                            });

                            feedparser.on('readable', function() {
                                // This is where the action is!
                                var stream = this,
                                    meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
                                    ,
                                    item;
                                while (item = stream.read()) {
                                    noticias.push(item);
                                }
                            });

                            feedparser.on('end', function() {
                                res.json(noticias)
                            });
                        }
                        else {
                            return res.notFound()
                        }
                    }
                    else {
                        return res.notFound()
                    }


                }
                else {
                    return res.notFound()
                }



            });



    }

};
