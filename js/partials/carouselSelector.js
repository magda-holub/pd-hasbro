var text = 'Vložte ID skupiny produktů',
	errorText = 'Špatné ID. Musí obsahovat pouze číslice a mít alespoň 5 znaků!',
	validText = 'Skupina produktů úspěšně nastavena.',
	removeText = 'Kolotoč byl odstraněn!',
	par = document.querySelector('#celek .ppAddCarousel .statusMsg'),
	button = document.querySelector('#celek .ppAddCarousel .btn'),
	carouselId = document.querySelector('#celek');

// on click
button.addEventListener("click", function () {
	// input target + all letters
	let input = document.querySelector('#celek .ppAddCarousel .productsGroup')
	let letters = /[a-zA-Z]/g
	let inputLength = input.value.length

	inputLength >= 1 ? checkString() : carouselRemoved()

	// check if string contain letters
	function checkString() {
		letters.test(input.value) ? inputFail() : inputValid()
	}

	// remove carousel = empty input
	function carouselRemoved() {
		par.textContent = removeText
		par.style.color = 'green'
		input.value = ''
		carouselId.setAttribute('data-carousel', 'none')
		console.log('carousel was removed')
	}

	// input is not valid
	function inputFail() {
		par.textContent = errorText
		par.style.color = 'red'
		input.value = ''
		carouselId.setAttribute('data-carousel', 'none')
	}

	// input is valid
	function inputValid() {
		if (inputLength >= 5) {
			par.textContent = validText
			par.style.color = 'green'
			carouselId.setAttribute('data-carousel', input.value)
			input.value = ''
		} else {
			inputFail()
		}
	}
});