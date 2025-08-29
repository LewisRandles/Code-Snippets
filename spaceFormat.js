// Snippet taken from project and may not work independently

const spaceFormat = function(value, type) {

	if (type === "singleSpace") {
		return value.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
	}

	else if (type === "noSpace") {
		return value.replace(/\s/g, '');
	}

};