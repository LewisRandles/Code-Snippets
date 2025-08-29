// Snippet taken from project and may not work independently

function regexTest(type, value) {

	const pattern = {
		alphanumeric: /^[a-zA-Z0-9\s]+$/,
		lettersOnly: /^[a-zA-Z\s]+$/,
		numbersOnly: /^[0-9]+$/,
		currency: /(^\d{1,3}(\.?\d{1,2})(,\d{1})?$)|(^\d{1,3}(,?\d{3})*(\.\d{1,2})?$)/,
		hexCode: /^(#)?(?:[0-9a-fA-F]{3}){1,2}$/
	};

	if (pattern[type] !== undefined) {
		return new RegExp(pattern[type], 'g').test(value);
	}

	else {
		return false;
	}

};