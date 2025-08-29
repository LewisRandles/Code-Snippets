// Snippet taken from project and may not work independently

function alterNextSibling(optionParent, state) {

	const getNextParent = optionParent.nextElementSibling;

	if (getNextParent !== null) {

		if (state === true) {
			getNextParent.style.marginTop = "7px";
		}

		else {
			getNextParent.style.marginTop = "";
		}

	}

}