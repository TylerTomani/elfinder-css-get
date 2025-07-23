export function initFocusControls() {
	const vibeCode = document.querySelector('#vibeCode');
	const nxtBtn = document.querySelector('#nxtBtn');
	const backBtn = document.querySelector('#backBtn');
	const mainScript = document.querySelector('#mainScript');
	const backToTopBtn = document.querySelector('#backToTopBtn');
	const versionElementsContainer = document.querySelector('.version-elements-container');
	const copyCodes = [...versionElementsContainer.querySelectorAll('.copy-code')];

	let iCopy = 0;
	// let focusedMainScript = false;

	// mainScript.addEventListener('focus', () => focusedMainScript = true);
	// mainScript.addEventListener('blur', () => focusedMainScript = false);
	mainScript.addEventListener('keydown', e => {
		if (e.shiftKey && e.key.toLowerCase() === 'b') {
			backBtn.focus();
		}
	});

	copyCodes.forEach((el, idx) => {
		el.addEventListener('focus', () => iCopy = idx);
	});

	document.addEventListener('keydown', e => {
		const key = e.key.toLowerCase();

		// if (focusedMainScript && !e.shiftKey) return;
		// if (!e.shiftKey) return;

		if (key === 'c') {
			if (e.metaKey) return;

			iCopy = e.shiftKey
				? (iCopy - 1 + copyCodes.length) % copyCodes.length
				: (iCopy + 1) % copyCodes.length;

			copyCodes[iCopy]?.focus();
		}

		if (!isNaN(key)) {
			const num = parseInt(key);
			if (num >= 1 && num <= copyCodes.length) {
				copyCodes[num - 1].focus();
			}
		}

		// Focus shortcuts
		switch (key) {
			case 'm': mainScript.focus(); break;
			case 'b': backBtn.focus(); break;
			case 'n': nxtBtn.focus(); break;
			case 'e': backToTopBtn.focus(); break;
			case 'v': vibeCode.focus(); break;
		}
	});
}
