// final result
var result

// return random number between 0 to 255
function randomNumGenerator(max) {
	return Math.floor(Math.random() * max);
}

// return six different random rgb color
function randomColorGenerator(num) {
	var colorGroup = []
	for (var i = 0; i < num; i++) {
		var color = 'rgb(' + randomNumGenerator(255) + ', ' + 
							 randomNumGenerator(255) + ', ' + 
							 randomNumGenerator(255) +')';
		colorGroup.push(color);
	}

	return colorGroup;
}

// update all six card based on random rgb color
function updateCard(num) {
	var newColorGroup = randomColorGenerator(num);
	var i = 0;
	result = newColorGroup[randomNumGenerator(num)];
	// console.log(result);
	document.querySelectorAll(".card").forEach(function(el) {
		el.style.background = newColorGroup[i];
		i++;
	});
}

// update guessing number
function updateRGB() {
	document.querySelector("h1").innerText = result.toUpperCase();
}

// fadeIn
function fadeIn() {
	document.querySelector(".firstRow").classList.add("fadeIn");
	document.querySelector(".secondRow").classList.add("fadeIn");
}

// reset all the website state
function reset() {
	document.querySelector("header").style.background = "#73a3d6";
	document.querySelector(".secondRow").classList.remove("hide");
	document.querySelector("#hard").classList.add("switchColor");
	document.querySelector("#result").classList.add("hide");
}

// play game once page load
document.addEventListener("DOMContentLoaded", function() {
	reset();
	updateCard(6);
	updateRGB();
})

// update all six card based on random rgb color and assign the guessing number
document.querySelector("#new").addEventListener("click", function() {
	reset();
	updateCard(6);
	updateRGB();
	document.querySelector("#hard").classList.add("switchColor");
	document.querySelector("#easy").classList.remove("switchColor");
	fadeIn();
});

// use only three cards to play with
document.querySelector("#easy").addEventListener("click", function() {
	reset();
	updateCard(3);
	document.querySelector(".secondRow").classList.add("hide");
	document.querySelector("#hard").classList.remove("switchColor");
	document.querySelector("#easy").classList.add("switchColor");
});

// use all six cards to play with
document.querySelector("#hard").addEventListener("click", function() {
	updateCard(6);
	document.querySelector(".secondRow").classList.remove("hide");
	reset();
	fadeIn();
	document.querySelector("#hard").classList.add("switchColor");
	document.querySelector("#easy").classList.remove("switchColor");
});

// click any card and check if it's right
document.querySelectorAll(".card").forEach(function(event) {
	event.addEventListener("click", function() {
		if (event.style.background == result) {
			// console.log("You Win!");
			document.querySelector("#result").innerHTML = "You Win!";
			document.querySelector("#result").classList.remove("hide");
			
			//update all cards with the final result color
			document.querySelectorAll(".card").forEach(function(el) {
				el.classList.remove("hide");
				el.style.background = result;
			});
			document.querySelector("header").style.background = result;
		}
		else {
			// console.log("You loose!");
			document.querySelector("#result").innerHTML = "Try again?";
			document.querySelector("#result").classList.remove("hide");
			event.classList.add("hide");
		}
	});
});