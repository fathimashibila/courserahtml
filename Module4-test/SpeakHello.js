(function (window) {

	var helloSpeaker = {};
	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

	// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";

	window.helloSpeaker = helloSpeaker;

})(window);
