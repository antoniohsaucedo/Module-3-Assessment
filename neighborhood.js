
function showRandom() {
	console.log('button tap');
	alert(months[random])
}



let buttonRandom = document.querySelector('button#restaurant');
buttonRandom.addEventListener('click', showRandom);


const months = ["SLC Eatery", "Red Iguana", "Bambara Salt Lake City", "Pig & a Jelly Jar SLC", "Chunga's", "Julia's Mexican Restaurant", "El Jaripeo Grill Mexican Food"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);