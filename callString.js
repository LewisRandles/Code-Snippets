// Snippet taken from project and may not work independently

const callString = function(startValue, callType, stringValue, argumentValue) {

	if (callType === "object") {

		const objectValue = (stringValue).split('.').reduce(function(acc, cur, idx, src) {
			return acc[cur];
		}, startValue);

		return objectValue;

	}

	if (callType === "function") {

		const functionValue = (stringValue).split('.').reduce(function(acc, cur, idx, src) {
			return acc[cur];
		}, startValue).apply(this, argumentValue);

		return functionValue;

	}

};