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

	let begin = document.getElementById("start");
	begin.addEventListener("click", function(){
		start();
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

function start (){
	result = false;
	let allBoundaries = document.getElementsByClassName("boundary");
	for (let i = 0; i < allBoundaries.length; i++) {		
		allBoundaries[i].classList.remove("youlose");
	}
}


window.onload = function (){
	setUpEvents();
}



