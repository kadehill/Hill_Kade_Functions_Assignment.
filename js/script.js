/** Kade Hill
 * August 25, 2015
 * SDI-1508
 * Functions Assignment
 */


// variables

var floridaQP = [];
var powerballQP = [];
var powerB = [];


var lottery = prompt("Do you want to play the Florida Lottery or Powerball?");
myLotto(lottery);

    if(lottery != "Florida Lottery") {
            if(lottery === ""){
                console.log("Try again later.");

            }else {
                console.log("Good Luck! You are playing the Powerball Lottery.");

                powerballLotto(59, 1, 5);
                powerball(35, 1, 1);
            }
}   else {
        console.log("Good Luck! You are playing the Florida Lottery.");
        floridaLotto(53, 1, 6);
}




//Function to prompt user to select a lotto game.
function myLotto(lotto) {



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

}



//Function to generate Powerball quick pick numbers lotto numbers.
function powerballLotto(max, min, num) {
    for (var i = 0; i < num; i++) {
        powerballQP[i] = Math.random() * (max - min) + min;
        powerballQP[i] = Math.round(powerballQP[i]);
    }
    console.log("Your Powerball lottery quick pick numbers are " + powerballQP);
}

//Function to generate the single power ball.
function powerball(max, min, num){
    for (var i = 0; i < num; i++) {
        powerB[i] = Math.random() * (max - min) + min;
        powerB[i] = Math.round(powerB[i]);

    }
    console.log("Your Powerball is " + powerB);
}








//functions

// Main code that calls my functions



    //var floridaLotto;

    //floridaLotto = Math.random() * (53 - 1) + 1;
    //console.log(floridaLotto);




