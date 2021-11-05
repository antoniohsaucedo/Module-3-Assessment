

function showAlert(evt) {
	console.log('form submit');
	alert("Yellow")
}

let buttonColor = document.querySelector('button#color');
buttonColor.addEventListener('click', showAlert);




function showPlaceAlert(evt) {
	console.log('form submit');
	alert("Utah")
}

let buttonPlace = document.querySelector('button#place');
buttonPlace.addEventListener('click', showPlaceAlert);




function showRitualAlert(evt) {
	console.log('form submit');
	alert("Design")
}
let buttonRitual = document.querySelector('button#ritual');
buttonRitual.addEventListener('click', showRitualAlert);





