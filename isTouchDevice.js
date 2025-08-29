// Snippet taken from project and may not work independently

function isTouchDevice() {

	return (('ontouchstart' in window) ||
		(navigator.maxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0));

}