// Snippet taken from project and may not work independently

function gapValues(element1, element2) {

	// Includes functions not included here

	const gapValues = element1.getBoundingClientRect();

	const returnValues = {
		top: Math.round(element2.getBoundingClientRect().top + window.scrollY),
		bottom: Math.round(bottomOffset(element1, element2)[0]),
		bottom2: Math.round(bottomOffset(element1, element2)[1]),
		left: Math.round(gapValues.left),
		right: Math.round(gapValues.right),
		width: Math.round(gapValues.width),
		height: Math.round(gapValues.height)
	}

	return returnValues;

}