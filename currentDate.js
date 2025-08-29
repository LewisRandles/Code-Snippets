// Snippet taken from project and may not work independently

const currentDate = function() {

	const event = new Date();

	const options = {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false
	};

	const getDate = event.toLocaleDateString('en-GB', options).split(", ");

	return {
		date: getDate[0],
		time: getDate[1]
	};

};