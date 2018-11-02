// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var randomNumber1 = Math.floor(Math.random() * 10) +1;
console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random() * 10) +1;
console.log(randomNumber2);
var randomNumber3 = Math.floor(Math.random() * 10) +1;
console.log(randomNumber3);
var randomNumber4 = Math.floor(Math.random() * 10) +1;
console.log(randomNumber4);

let numberGuess1 = " ";

let numberGuess2 = " ";
let numberGuess3 = " ";
let numberGuess4 = " ";

let numbersCorrect = 0;
let numbersInPlace = 0;


// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
    
    numberGuess1 = $("#number1").val();
    let integer1 = parseInt(numberGuess1);
    numberGuess2 = $("#number2").val();
    let integer2 = parseInt(numberGuess2);
    numberGuess3 = $("#number3").val();
    let integer3 = parseInt(numberGuess3);
    numberGuess4 = $("#number4").val();
    let integer4 = parseInt(numberGuess4);
    $("#userChoice").text(numberGuess1+ " " + numberGuess2 + " " + numberGuess3 + " " + numberGuess4);
    
    if(integer1 === randomNumber1){
        numbersInPlace = numbersInPlace + 1
        $("#results").text(numbersInPlace);
    } else if(integer2 === randomNumber2){
        numbersInPlace = numbersInPlace + 1
        $("#results").text(numbersInPlace);
    }else if (integer3 === randomNumber3){
        numbersInPlace = numbersInPlace + 1
        $("#results").text(numbersInPlace);
    }else if(integer4 === randomNumber4){
        numbersInPlace = numbersInPlace + 1
        $("#result").text(numbersInPlace);
    }
    
});
