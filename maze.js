var result = false;

function setUpEvents(){
	let allBoundaries = document.getElementsByClassName("boundary");
	for (let i = 0; i < allBoundaries.length; i++) {
		if (allBoundaries[i].className == "boundary"){
			allBoundaries[i].addEventListener("mouseover", function(){
			allred();
			});
		}	
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
		if (allBoundaries[i].className == "boundary"){	
			allBoundaries[i].classList.add("youlose");
		}
	}
}

function finish(){
	if (result){
		document.getElementById("status").textContent = "You Lose";
	} else {
		document.getElementById("status").innerHTML = "You win";
		let mazeremove = document.getElementById("maze");				//Code should remove the event listener so that when the user wins the game they are able to exit the maze without losing
		mazeremove.removeEventListener("mouseleave", function(){
		
	});
	}	
}

function start (){
	result = false;
	let allBoundaries = document.getElementsByClassName("boundary");
	for (let i = 0; i < allBoundaries.length; i++) {		
		allBoundaries[i].classList.remove("youlose");
	}	
	//location.reload();
}

window.onload = function (){
	let initial = document.getElementById("start"); //The user must touch S before they are able to attempt the maz
	initial.addEventListener("mouseover", function(){
		setUpEvents();
		let maze = document.getElementById("maze");		
		maze.addEventListener("mouseleave", function(){
		allred();
		finish();
	});
	})
}



