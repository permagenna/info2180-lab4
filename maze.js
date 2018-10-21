

function setUpEvents(){
	let allBoundaries = document.getElementsByClassName("boundary");
	for (let i = 0; i < allBoundaries.length; i++) {
		allBoundaries[i].addEventListener("mouseover", function(){
			allred();
		});
	}
}

function allred(){
	let allBoundaries = document.getElementsByClassName("boundary");
	for (let i = 0; i < allBoundaries.length; i++) {		
		allBoundaries[i].classList.add("youlose");
	}
}


window.onload = function (){
	setUpEvents();
}



