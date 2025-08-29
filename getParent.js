// Snippet taken from project and may not work independently

function getParent(child, parent, attrtype) {

	let parentFound = false;
	let parentElement;

	if (child) {

		if (child[attrtype].split(" ").includes(parent.substr(1)) === true) {
			parentFound = true;
			parentElement = child;
		}

		else {

			while (child[attrtype].split(" ").includes(parent.substr(1)) === false) {

				if (child?.parentNode?.tagName && child.parentNode.tagName !== "BODY") {
					child = child.parentNode;
				}

				else {
					break;
				}

				if (child[attrtype].split(" ").includes(parent.substr(1)) === true) {
					parentFound = true;
					parentElement = child;
				}

			}

		}

	}

	return [parentFound, parentElement];

};