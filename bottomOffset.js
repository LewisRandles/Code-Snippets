// Snippet taken from project and may not work independently

function bottomOffset(element1, element2) {

	const scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

	const menuElement = element1;
	const menuRect = menuElement.getBoundingClientRect()
	const gapWithoutPadding = scrollHeight - ((scrollY + menuRect.top) + (menuRect.height - parseInt(window.getComputedStyle(menuElement).paddingBottom)));
	const gapWithPadding = scrollHeight - ((scrollY + menuRect.top) + (menuRect.height));

	return [((isNaN(gapWithoutPadding) === false) ? gapWithoutPadding : 0), ((isNaN(gapWithPadding) === false) ? gapWithPadding : 0)]

}