
var request = require('request');



module.exports = function getnbtop(){

	
	return gladys.param.getValues(['FORTNITESTATS_plateforme', 'FORTNITESTATS_username'])
    .spread((FORTNITESTATS_plateforme, FORTNITESTATS_username) => {
    
	     var options = {
		    url: 'http://api.fortnitetracker.com/v1/profile/'+FORTNITESTATS_plateforme+'/'+FORTNITESTATS_username,
		    method: 'GET',
		    headers: {
		        'accept': 'application/json',
		        'TRN-Api-Key' : '2a4ebb26-e5c6-4dff-815f-f7c537fb2ac5'
		    }
		};

		console.log("Start");
		var x = request(options,function(error, response, body){
		    console.log('statusCode:', response && response.statusCode);
		    console.log('body:', body);
		});

		x.end();

    });
	


}

