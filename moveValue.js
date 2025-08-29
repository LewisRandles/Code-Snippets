// Snippet taken from project and may not work independently

const moveValue = function(data, from, to) {

	// get the value to move
	const movedValue = data.splice(from, 1)[0];

	// insert the moved value
	data.splice(to, 0, movedValue);

	return data;

};