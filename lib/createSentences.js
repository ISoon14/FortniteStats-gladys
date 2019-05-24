module.exports = function createSentences(){
	sails.log.debug('Début installation des sentences');
	var arraySentence = [{
	    'uuid': '5895adb2-abb7-4e03-8cbe-a8d2248d3092',
		'text': 'Combien ai-je de top 1 ?', 
		'label': 'getnbtop',
		'status': 'approved',
		'service': 'fortnite',
		'language': 'fr'
	}]

	arraySentence.forEach(function(Sentence) {
		gladys.sentence.create(Sentence)
	})


	gladys.brain.trainNew()

	sails.log.debug('Fin installation des sentences');
}