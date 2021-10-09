const fonts = [
	'Kirang Haerang',
	'Indie Flower',
	'Rye',
	'Amatic SC',
	'Bangers',
	'Fredericka the Great',
];

const letters = document.querySelectorAll('.letter');
let count = 0;

function rollingTheIntro() {
	letters.forEach(function (letter) {
		let randomFontIndex = Math.floor(Math.random() * fonts.length);
		let randomFont = fonts[randomFontIndex];
		letter.style.fontFamily = randomFont;
	});
}

let introAnimation = setInterval(function () {
	rollingTheIntro();
	if (count > 15) {
		clearInterval(introAnimation);
	}
    count++;
}, 350);
