// Snippet taken from project and may not work independently

function typeID(value) {

	const defaultFormat = Object.prototype.toString.call(value);

	return defaultFormat.split(' ')[1].replace(/\W+/gi, '').toLowerCase();

}