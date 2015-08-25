/** Kade Hill
 * August 25, 2015
 * SDI-1508
 * Functions Assignment
 */


// variables
var floridaQP;
var lottery;
//var lottery = prompt("Do you want to play the Florida Lottery or Powerball?");


//My Functions
function myLotto(lotto) {

    if(lottery != "Florida Lottery") {
        console.log("Good Luck! You are playing the Powerball Lottery.");
    }   else {
        console.log("Good Luck! You are playing the Florida Lottery.");
    }


    var chances = 1;

    while (lotto === ""){
        lotto = prompt("Please select a lotto game.");

        chances++

        if (chances === 5) {
            console.log("Sorry, you have exceeded your chances to select a lotto game. Please play responsibly.");

            break;
        }
    }
            return lotto;

}

//Function to generate Florida Lotto numbers
function floridaLotto(){

        floridaQP = Math.random() * (53 - 1) + 1;
        floridaQP = Math.round(floridaQP);
        console.log(floridaQP);

}
//functions

// Main code that calls my functions
//myLotto(lottery);
floridaLotto();
    //var floridaLotto;

    //floridaLotto = Math.random() * (53 - 1) + 1;
    //console.log(floridaLotto);




