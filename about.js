console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert("the form has been submitted successfully")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);




function handleMouseover() {
	console.log('Show complement');
	alert(complement[random])
}

let image = document.querySelector('img');
image.addEventListener('mouseover', handleMouseover);



const complement = ["You are smart", "You can learn anything you want", "You are good at everything", "I appreciate you", "You've got all the right moves", "You are enough", "On a scale from 1 to 10, you're an 11"];

const random = Math.floor(Math.random() * complement.length);
