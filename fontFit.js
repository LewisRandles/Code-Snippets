// Snippet taken from project and may not work independently

const fontFit = function(attributeValue) {

	const removeTag = attributeValue.substr(1);

	if (attributeValue.indexOf("#") !== -1) {

		const element = document.getElementById(removeTag);
		const fontSize = document.getComputedStyle(element).fontSize;

		if ((element.scrollWidth > element.clientWidth) === true) {

			while (element.scrollWidth > element.clientWidth) {
				let fontValue = Number(fontSize.toString().replace(/[^0-9]/g, ""));
				element.style['font-size'] = --fontValue + "px";
			}

		}

	}

	else if (attributeValue.indexOf(".") !== -1) {

		const getElement = document.getElementsByClassName(removeTag);

		for (let classFontSize = 0; classFontSize < document.querySelectorAll(attributeValue).length; classFontSize++) {

			const currentElement = getElement[classFontSize];
			const getFontSize = window.getComputedStyle(currentElement).fontSize;
			let fontValue = Number(getFontSize.toString().replace(/[^0-9]/g, ""));

			if ((currentElement.scrollWidth > currentElement.clientWidth) === true) {

				while (currentElement.scrollWidth > currentElement.clientWidth) {
					currentElement.style["font-size"] = (--fontValue) + "px";
				}

			}

		}

	}

};