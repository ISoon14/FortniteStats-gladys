
var http = require('http');

module.exports = function getnbtop(){

	
	return gladys.param.getValues(['FORTNITESTATS_plateforme', 'FORTNITESTATS_username'])
    .spread((FORTNITESTATS_plateforme, FORTNITESTATS_username) => {
    
	     var options = {
		    host: 'api.fortnitetracker.com',
		    port:80,
		    path: "/v1/profile/"+FORTNITESTATS_plateforme+"/"+FORTNITESTATS_username,
		    method: 'GET',
		    headers: {
		        accept: 'application/json',
		        TRN-Api-Key : '2a4ebb26-e5c6-4dff-815f-f7c537fb2ac5'
		    }
		};

		console.log("Start");
		var x = http.request(options,function(res){
		    console.log("Connected");
		    res.on('data',function(data){
		        console.log(data);
		    });
		});

		x.end();

    });
	


}

