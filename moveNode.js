// Snippet taken from project and may not work independently

const moveNode = function(action, referenceNode, newNode) {

	// Insert an element above another
	if (action === "insertAfter") {
		return referenceNode.parentNode.insertBefore(newNode, referenceNode);
	}

	// Insert an element below another
	if (action === "insertBefore") {
		return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}

};