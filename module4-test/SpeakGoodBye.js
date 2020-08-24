(function (window) {
	var goodbyeSpeaker = {};
	goodbyeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

	// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "Hi";

	window.goodbyeSpeaker = goodbyeSpeaker;

})(window);
