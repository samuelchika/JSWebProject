
var maxValue, arrSize, userInput;
//get the maximum value
do {
  maxValue = prompt("Type in the max value you want to generate. \nEx: If you type in 5. the machine will generate a number between 1 - 5. \nThe value entered must be a number");
} while (isNaN(maxValue));
//get the array size
do {
  arrSize = prompt("How many random numbers you want to generate? \nThe value entered must be a number");
} while (isNaN(arrSize));
//get the user input
do {
  userInput = prompt("Enter a number to see if it has been generated\nThe number must be between 1 - " + maxValue);
} while (isNaN(userInput));
//generate the numbers and push into the array
var arrNumber = [];
  for (var i = 0; i < arrSize; i++) {
    var num = (Math.floor(Math.random() * maxValue)) + 1;
    arrNumber.push(num);
  }
console.log(arrNumber);
var boolval = arrNumber.filter(function(element) {
  if(element == userInput) {
    return element;
  }
});

const pGuess = document.getElementById("valGuess");
if(boolval.length > 0) {
  pGuess.innerHTML = "You Win!";
  pGuess.classList.add("won");
} else {
  pGuess.innerHTML = "You Loss!";
  pGuess.classList.add("loss");
}


//console.log(boolval);
