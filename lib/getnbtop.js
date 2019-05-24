
var request = require('request');



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

		console.log("Start");
		var x = request(options,function(error, response, body){
		    console.log('statusCode:', response && response.statusCode);

		    var stats = body.stats.lifeTimeStats;
		    stats.forEach(function (element){
		    	console.log(element)
		    });

		    console.log('body:', );
		});

		x.end();

    });
	


}

