var request = require('request');

const Promise = require('bluebird');

module.exports = function getnbtop(){


        return gladys.param.getValues(['FORTNITESTATS_plateforme', 'FORTNITESTATS_username'])
    .spread((FORTNITESTATS_plateforme, FORTNITESTATS_username) => {

             var options = {
                    url: 'http://api.fortnitetracker.com/v1/profile/'+FORTNITESTATS_plateforme+'/'+FORTNITESTATS_username,
                    method: 'GET',
                    headers: {
                        'accept': 'application/json',
                        'TRN-Api-Key' : '7c831300-7bb6-4768-b846-377e025a26da'
                    }
                };
                var top = 0;

                console.log("Start");
                var x = request(options,function(error, response, body){
                    console.log('statusCode:', response && response.statusCode);

                        body = JSON.parse(body);



                    var stats = body.lifeTimeStats;

                    stats.forEach(function (element){
                        if(element['key'] == "Wins"){

                                gladys.modules.voicerss.say({language: 'fr-fr', text: "Votre nombre de top un est de " + element['v$
                        }
                    });


                });

                x.end();

    });



}

