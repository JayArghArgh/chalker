"use strict";

// Add a listener for the new game button
const btnNewGame = $('.new-burma-game');
btnNewGame.click((event) => {
	const currentState = {
		newId: "",
	};

	fetch('/api/games/', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		// Serialize the json body.
		body: JSON.stringify(currentState),
	}).then((res) => {
		if (res.ok) {
			location.reload();
		}
	});
});