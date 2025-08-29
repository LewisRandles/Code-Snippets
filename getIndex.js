// Snippet taken from project and may not work independently

function getIndex(type, targetElement, searchRange, targetSelector) {

	let elementIndex = 0;

	if (type === "withinParent") {

		if (targetElement.previousSibling === null) {
			return 0;
		}

		else if (targetElement.previousSibling !== null) {

			while (targetElement = targetElement.previousSibling) {

				++elementIndex;

				if (targetElement.previousSibling === null) {
					return elementIndex;
				}

			}

		}

	}

	if (type === "withinRange") {

		for (let index = 0; index < searchRange.querySelectorAll(targetSelector).length; index++) {

			if (searchRange.querySelectorAll(targetSelector)[index] === targetElement) {
				return elementIndex;
			}

			elementIndex++;

		}

	}

};