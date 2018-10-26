// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var randomNumber1 = Math.random();
console.log(randomNumber1);
var randomNumber2 = Math.random();
var randomNumber3 = Math.random();
var randomNumber4 = Math.random();

let numberGuess1 = " ";
let numberGuess2 = " ";
let numberGuess3 = " ";
let numberGuess4 = " ";

let numbersCorrect = 0;
let numbersInPlace = 0;


// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
    
    numberGuess1 = $("#number1").val();
    numberGuess2 = $("#number2").val();
    numberGuess3 = $("#number3").val();
    numberGuess4 = $("#number4").val();
    $("#userChoice").text(numberGuess1+ " " + numberGuess2 + " " + numberGuess3 + " " + numberGuess4);
    
});
