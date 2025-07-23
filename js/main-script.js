import { setupLetterFocusControls } from './modules/focus-controls.js';
console.log('main-script.js loaded');

document.addEventListener("DOMContentLoaded", () => {
	console.log('DOM fully loaded');

	const codeContainer = document.querySelector('.code-elements-container');
	console.log('codeElementsContainer:', codeContainer);
	setupLetterFocusControls({
		nxtBtn: document.querySelector('#nxtBtn'),
		backBtn: document.querySelector('#backBtn'),
		mainScript: document.querySelector('#mainScript'),
		homelink: document.querySelector('#homelink'),
		backToTopBtn: document.querySelector('#backToTopBtn'),
		codeElementsContainer: document.querySelector('.code-elements-container'),
		elementImg: document.getElementById("elementImg")
	});
});
