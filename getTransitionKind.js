// Snippet taken from project and may not work independently

function getTransitionKind() {

	let transitions = {
		"transition": "transitionend",
		"OTransition": "oTransitionEnd",
		"MozTransition": "transitionend",
		"WebkitTransition": "webkitTransitionEnd"
	}

	let bodyStyle = document.body.style;

	for (let transition in transitions) {

		if (bodyStyle[transition] != undefined) {
			return transitions[transition];
		}

	}

}