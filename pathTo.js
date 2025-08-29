// Snippet taken from project and may not work independently

const pathTo = (array, target) => {

	let result;

	array.some(({
		id,
		children = []
	}) => {

		if (id === target) {
			return (result = id);
		}

		const temp = pathTo(children, target);

		if (temp) {
			return (result = id + '.' + temp);
		}

	});

	return result;

};