// Snippet taken from project and may not work independently

function generateRule(styleValues) {

	// Includes functions not included here

	styleValues.forEach(e => {

		const ruleValue = e[0];
		const styleValue = e[1];

		const styleSheet = document.querySelector("#coreStyles");

		const getRule = checkRule(ruleValue, styleSheet);

		if (typeID(styleValue) === "array" && styleValue.length > 0) {

			if (getRule === undefined) {

				for (let createStyle = 0; createStyle < Object.values(styleValue).length; createStyle++) {
					const currentRule = Object.values(styleValue)[createStyle];
					styleSheet.sheet.insertRule(`${ruleValue} { ${currentRule.type}: ${currentRule.value} }`, 0);
				}

			}

			else if (getRule !== undefined) {

				for (let applyStyle = 0; applyStyle < Object.values(styleValue).length; applyStyle++) {

					if (getRule[0].style[Object.values(styleValue)[applyStyle].type] !== undefined) {
						getRule[0].style[Object.values(styleValue)[applyStyle].type] = Object.values(styleValue)[applyStyle].value;
					}

				}

			}

		}

	});

};