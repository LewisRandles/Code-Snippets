// Snippet taken from project and may not work independently

function checkRule(ruleValue, styleElement) {

	const ruleFound;
	const ruleList = Array.from(styleElement.sheet.cssRules);

	Object.values(ruleList).find((rule, index) => {

		if (ruleValue === rule.selectorText) {
			ruleFound = [rule, index];
		}

	});

	return ruleFound;

};