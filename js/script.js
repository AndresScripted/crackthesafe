// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
    
    var guess1 = $("#number1").val();
    var guess2 = $("#number2").val();
    var guess3 = $("#number3").val();
    var guess4 = $("#number4").val();
    $("#userChoice").text(guess1+ guess2+ guess3+guess4);
    
});
