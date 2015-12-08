

// function Dice (sides){
// 	this.sides = sides;
// 	this.roll = function (){
// 		var number = Math.floor(Math.random()* this.sides) + 1;
// 		if(number === 1){
// 			return "<img src='img/dice1.png' alt='number 1'>";
// 		}
// 		if(number === 2){
// 			return "<img src='img/dice2.png' alt='number 1'>";
// 		}
// 		if(number === 3){
// 			return "<img src='img/dice3.png' alt='number 1'>";
// 		}
// 		if(number === 4){
// 			return "<img src='img/dice4.png' alt='number 1'>";
// 		}
// 		if(number === 5){
// 			return "<img src='img/dice5.png' alt='number 1'>";
// 		}
// 		if(number === 6){
// 			return "<img src='img/dice6.png' alt='number 1'>";
// 		}
// 	}

// }

function Dice(sides){
	this.sides = sides;
}


Dice.prototype.roll = function() {  //declare the contructor methods outside //
	var number = Math.floor(Math.random()* this.sides) + 1;
		if(number === 1){
			return "<img src='img/dice1.png' alt='number 1'>";
		}
		if(number === 2){
			return "<img src='img/dice2.png' alt='number 1'>";
		}
		if(number === 3){
			return "<img src='img/dice3.png' alt='number 1'>";
		}
		if(number === 4){
			return "<img src='img/dice4.png' alt='number 1'>";
		}
		if(number === 5){
			return "<img src='img/dice5.png' alt='number 1'>";
		}
		if(number === 6){
			return "<img src='img/dice6.png' alt='number 1'>";
		}
	

}




var dice = new Dice(6);
var dice10 = new Dice(10);
console.log(dice === dice10);

function printImage(image){
	var placeholder = document.getElementById("placeholder"); // inserts html inside the p tag element
	placeholder.innerHTML = image;
}


var button = document.getElementById("button");

 // button.onclick  = printImage(dice.roll()); // note can't do this - have to use an anoymonous function like below, otherwise it will call the function printImage even before the onlick gets called

button.onclick = function () {
	var result = dice.roll();
	printImage(result);
}