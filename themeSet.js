// Snippet taken from project and may not work independently

function themeSet() {

	// Includes functions not included here

	if (window.matchMedia) {

		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

			if (!!getCookie("toggleTheme") === false) {
				setCookie("toggleTheme", "nightMode", 2147483647);
			}

		}

		else {
			setCookie("toggleTheme", "lightMode", 2147483647);
		}

	}

}