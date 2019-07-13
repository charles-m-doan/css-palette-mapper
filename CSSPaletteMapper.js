// UTILITY PARAMETERS -------------------------------------------------------------------
const showPaletteViewButton = true;

// COLOR MAPPING PARAMETERS -------------------------------------------------------------
const levels = 8; // How many contrast steps away from the base color do you want mapped? (applies to both tints and shades)
const shadeBuffer = 0.1; //How far (percentage-wise) do you want the darkest shades to be from pure black?
const tintBuffer = 0.1; //How far (percentage-wise) do you want the lightest tints to be from pure white?
const baseColorsMap = new Map();
baseColorsMap.set("primary", "#192d49");
baseColorsMap.set("secondary", "#468189");
baseColorsMap.set("compliment", "#f6edd6");
baseColorsMap.set("neutral", "#808080");

if (showPaletteViewButton) {
	function createPaletteView(newDocument) {
		let paletteViewButton = newDocument.createElement("div");
		paletteViewButton.appendChild(newDocument.createTextNode("See Palette"));
		let body = newDocument.getElementsByTagName("body")[0];
		body.insertBefore(paletteViewButton, body.childNodes[0]);
	}

	function openPaletteViewerTab() {
		console.log("Open Palette Viewer Tab!");
		let newWindow = window.open("", "_blank");
		let newDocument = newWindow.document;
		let newBody = newDocument.getElementsByTagName("body")[0];
		newBody.onload = function() {
			createPaletteView(newDocument);
			console.log("Blank Window Loaded!");
		};
	}

	let paletteViewButton = document.createElement("div");
	paletteViewButton.appendChild(document.createTextNode("See Palette"));
	paletteViewButton.setAttribute("id", "paletteViewButton");
	paletteViewButton.onclick = function() {
		openPaletteViewerTab();
	};

	let body = document.getElementsByTagName("body")[0];
	body.insertBefore(paletteViewButton, body.childNodes[0]);
}
