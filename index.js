module.exports = function(sails) {

	var command = require('./lib/command.js');
	var install = require('./lib/install.js');
	var getnbtop = require('./lib/getnbtop.js');

	console.log('test');

	return{
		install:install,
		command:command,
		getnbtop:getnbtop
	};

}