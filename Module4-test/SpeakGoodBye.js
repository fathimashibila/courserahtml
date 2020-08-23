(function (window) {
	var byeSpeaker = {};
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

	// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "Good Bye";

	window.byeSpeaker = byeSpeaker;

})(window);
