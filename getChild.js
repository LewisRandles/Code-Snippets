// Snippet taken from project and may not work independently

function getChild(parentConfig, childConfig) {

	const result = {
		parent: [false, undefined],
		child: [false, undefined]
	};

	if (parentConfig) {

		let parentsSelector;
		let parentIndex = 0;

		if (parentConfig.index) {
			parentIndex = parentConfig.index;
		}

		if (parentConfig.selector) {
			parentsSelector = parentConfig.selector;
		}

		if (parentsSelector && parentIndex) {

			const parentElement = document.querySelectorAll(parentsSelector)[parentIndex];

			if (parentElement) {

				result.parent[0] = true;

				result.parent[1] = parentElement;

				if (childConfig) {

					let childSelector;
					let childIndex = 0;

					if (childConfig.index) {
						childIndex = childConfig.index;
					}

					if (childConfig.selector) {
						childSelector = childConfig.selector;
					}

					// ---------------

					if (childSelector && childIndex) {

						const childElement = parentElement.querySelectorAll(childSelector)[childIndex];

						if (childElement) {
							result.child[0] = true;
							result.child[1] = childElement;
						}

					}

				}

			}

		}

	}

	return result;

};