console.log('hello world');

const randomColor = () => {
	let numbers = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += numbers[Math.floor(Math.random() * 16)];
	}
	return color;
};

console.log(randomColor());

const imageBoxes = document.getElementsByClassName('image');

console.log(imageBoxes);

// for (let image of imageBoxes) {
// 	image.style.backgroundColor = randomColor();
// }
