var result = false;

function setUpEvents(){
	let allBoundaries = document.getElementsByClassName("boundary");
	for (let i = 0; i < allBoundaries.length; i++) {
		allBoundaries[i].addEventListener("mouseover", function(){
			allred();
		});
	}
	
	let end = document.getElementById("end");
	end.addEventListener("mouseover", function(){
		finish();
	})
}

function allred(){
	result = true;
	let allBoundaries = document.getElementsByClassName("boundary");
	for (let i = 0; i < allBoundaries.length; i++) {		
		allBoundaries[i].classList.add("youlose");
	}
}

function finish(){
	if (result){
		alert("You lose");
	} else {
		alert("You win");
	}
	
}


window.onload = function (){
	setUpEvents();
}



