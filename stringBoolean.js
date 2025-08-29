// Snippet taken from project and may not work independently

function stringBoolean(value) {

	try {
		return JSON.parse(value);
	}

	catch (e) {
		return false;
	}

}