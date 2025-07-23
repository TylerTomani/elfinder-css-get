
export function setupLetterFocusControls({
	nxtBtn,
	backBtn,
	mainScript,
	homelink,
	backToTopBtn,
	codeElementsContainer,
	elementImg
}) {
	const focusableBtns = [nxtBtn, backBtn, homelink, backToTopBtn];

	let currentIndex = 0;
	let elements = [];

	function updateImage(source) {
		if (elementImg) {
			elementImg.src = source;
		}
	}

	function focusElement(index) {
		if (index >= 0 && index < elements.length) {
			elements[index].focus();

			const imgPath = elements[index].dataset.img;
			if (imgPath) {
				updateImage(imgPath);
			}
		}
	}

	function resetFocus() {
		currentIndex = 0;
		focusElement(currentIndex);
	}

	function handleKeydown(e) {
		if (e.key === 'ArrowRight') {
			if (currentIndex < elements.length - 1) {
				currentIndex++;
				focusElement(currentIndex);
			}
		} else if (e.key === 'ArrowLeft') {
			if (currentIndex > 0) {
				currentIndex--;
				focusElement(currentIndex);
			}
		} else if (e.key === 'Enter') {
			elements[currentIndex]?.click();
		}
	}

	function setupListeners() {
		nxtBtn?.addEventListener('click', () => {
			if (currentIndex < elements.length - 1) {
				currentIndex++;
				focusElement(currentIndex);
			}
		});

		backBtn?.addEventListener('click', () => {
			if (currentIndex > 0) {
				currentIndex--;
				focusElement(currentIndex);
			}
		});

		document.addEventListener('keydown', handleKeydown);
	}

	function init() {
		elements = Array.from(codeElementsContainer?.querySelectorAll('button, a, .focusable') || []);

		

		resetFocus();
		setupListeners();
	}

	init();
}
