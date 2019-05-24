module.exports = function command(scope) {

	var response = {};

	switch(scope.label) {
		case 'getnbtop':
            toCall = gladys.modules.fortnitestats.getnbtop();
            return response
		break;

	}
	return toCall;
}