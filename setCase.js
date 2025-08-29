// Snippet taken from project and may not work independently

const setCase = function(type, value) {

	// Includes functions not included here

	let splitValue;

	if (typeValue(value) === "[object Array]") {
		splitValue = value;
	}

	else {
		splitValue = value.toString().split(" ");
	}

	const lowerCase = ['and', 'the', 'to', 'for', 'is', 'in', 'a', 'at', 'an', 'from', 'by', 'if', 'of'];

	for (let wordLoop = 0; wordLoop < splitValue.length; wordLoop++) {

		const currentWord = splitValue[wordLoop].toString().toLowerCase();

		// Title Case - First Case
		if ((type === "titleCase" && lowerCase.includes(currentWord) === false) || (type === "firstCase" && wordLoop === 0)) {

			const firstChar = currentWord.indexOf(currentWord.match('[a-zA-Z]'));

			if (firstChar >= 0) {
				splitValue[wordLoop] = currentWord.substr(0, firstChar) + currentWord[firstChar].toUpperCase() + currentWord.substr(firstChar + 1);
			}

		}

		// Upper Case
		if (type === "upperCase") {
			splitValue[wordLoop] = currentWord.toUpperCase();
		}

		// Lower Case
		if (type === "lowerCase") {
			splitValue[wordLoop] = currentWord.toLowerCase();
		}

		// Loop End Return
		if (wordLoop + 1 === splitValue.length) {

			if (typeValue(value) === "[object Array]") {
				return splitValue;
			}

			else {
				return splitValue.join(" ");
			}

		}

	}

};