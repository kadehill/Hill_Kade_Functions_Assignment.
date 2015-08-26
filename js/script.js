/** Kade Hill
 * August 25, 2015
 * SDI-1508
 * Functions Assignment
 */


// variables
var lottery;
var floridaQP = [];


var lottery = prompt("Do you want to play the Florida Lottery or Powerball?");


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
function floridaLotto(max, min, num){
        for (var i = 0; i < num; i++){
            floridaQP[i] = Math.random() * (max - min) + min;
            floridaQP[i] = Math.round(floridaQP[i]);
        }
    console.log("Your Florida lottery quick pick numbers are " + floridaQP);

    return floridaLotto;
}
//functions

// Main code that calls my functions
 myLotto(lottery);
 floridaLotto(53, 1, 6);

    //var floridaLotto;

    //floridaLotto = Math.random() * (53 - 1) + 1;
    //console.log(floridaLotto);




