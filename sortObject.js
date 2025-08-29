// Snippet taken from project and may not work independently

const sortObject = function(identifier, object, sorted) {

	// Includes functions not included here

	let result = [];

	let hasNested = false;

	for (let item = 0; item < Object.keys(object).length; item++) {

		const objectValues = Object.values(object)[item];

		if (typeValue(objectValues) === "[object Object]") {
			hasNested = true;
			result = result.concat(sortObject(identifier, objectValues, result))
		}

		// ---------------

		if (item + 1 === Object.keys(object).length) {

			if (hasNested === false) {
				result.push(object)
			}

			if (sorted === undefined) {
				// something could be here
			}

			else {
				return result
			}

		}

	};

};