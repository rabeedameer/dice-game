function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

let firstDice = {
	value: getRandomInt(1, 6),
	roll: () => {
		this.value = getRandomInt(1, 6);
		return this.value;
	}
};
let secondDice = {
	value: getRandomInt(1, 6),
	roll: () => {
		this.value = getRandomInt(1, 6);
		return this.value;
	}
};



function backgroundImage(firstImage, secondImage) {
	let diceFirstSide = document.querySelector('#first-dice');
	let diceSecondSide = document.querySelector('#second-dice');
	diceFirstSide.style['background-image'] = `url(dice-images/dice-${firstImage}.svg)`;
	diceSecondSide.style['background-image'] = `url(dice-images/dice-${secondImage}.svg)`;
}
let button = document.querySelector('#dice-roll');
button.addEventListener('click', (event) => {
	event.preventDefault;
	let result1 = firstDice.roll();
	let result2 = secondDice.roll();
	backgroundImage(result1, result2);

});
backgroundImage(firstDice.value, secondDice.value);
