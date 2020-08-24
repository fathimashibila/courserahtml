(function (window) {
	var hiSpeaker = {};
	hiSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

	// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "Hi";

	window.hiSpeaker = hiSpeaker;

})(window);
