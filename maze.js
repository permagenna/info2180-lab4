

function setUpEvents(){
	let bound = document.getElementById("boundary1");
	bound.addEventListener("mouseover", function(){
		bound.classList.add("youlose")
	});
}


window.onload = function (){
	setUpEvents();
}





