/** Kade Hill
 * August 25, 2015
 * SDI-1508
 * Functions Assignment
 */


// variables

var floridaQP = []; //defining the array
var powerballQP = []; //defining the array
var powerB = []; //defining the array

//Prompts
var lottery = prompt("Do you want to play the Florida Lottery or Powerball?"); ///Prompt that forces user to select a specific lottery game.
myLotto(lottery); //calling the function

    if(lottery != "Florida Lottery") {    //if the user's input is not Florida Lottery
            if(lottery === "") {   //If the user leaves the prompt blank
                console.log("Try again later."); //console output to user.

            }if(lottery != "Powerball") { //if the user's input is not Powerball
                console.log("You've entered an invalid lottery game. Please enter Powerball or Florida Lottery."); //the console advises user to input either Powerball or Florida Lottery.
            }else { // if the user inputs Powerball, console wishes them good luck and then confirms user's selection.
                console.log("Good Luck! You are playing the Powerball Lottery.");

                powerballLotto(59, 1, 5); //calling the powerball lottery quick pick function
                powerball(35, 1, 1); //calling the main power ball function
            }
}   else {
        console.log("Good Luck! You are playing the Florida Lottery."); //console confirms that user is playing the Florida Lottery.
        floridaLotto(53, 1, 6); //calling the floridaLotto function.
}


//Function to prompt user to select a lotto game.
function myLotto(lotto) {



    var chances = 1; //defining variable

    while (lotto === ""){ //as long as the user leaves prompt blank, a reminder message will appear.
        lotto = prompt("Please select a lotto game."); //console message to remind user to select their desired lotto game.

        chances++   //code to count number of chances

        if (chances === 5) { //number of chances user has to input correct lottery name
            console.log("Sorry, you have exceeded your chances to select a lotto game. Please play responsibly."); //console outputs sorry message once user goes over 5 chances.

            break; //breaks the loop
        }
    }
            return lotto; //returns to lotto.

}

//Function to generate Florida Lotto numbers
function floridaLotto(max, min, num){
        for (var i = 0; i < num; i++){
            floridaQP[i] = Math.random() * (max - min) + min; //math object to select a random number
            floridaQP[i] = Math.round(floridaQP[i]); //math object to round number to nearest whole number
        }

    console.log("Your Florida lottery quick pick numbers are " + floridaQP); //console outputs the Florida Lottery quick pick numbers.

}



//Function to generate Powerball quick pick numbers lotto numbers.
function powerballLotto(max, min, num) {
    for (var i = 0; i < num; i++) {
        powerballQP[i] = Math.random() * (max - min) + min; //math object to select a random number
        powerballQP[i] = Math.round(powerballQP[i]); //math object to round number to nearest whole number
    }
    console.log("Your Powerball lottery quick pick numbers are " + powerballQP); //console outputs the Powerball quick pick numbers.
}

//Function to generate the single power ball.
function powerball(max, min, num){
    for (var i = 0; i < num; i++) {
        powerB[i] = Math.random() * (max - min) + min; //math object to select a random number
        powerB[i] = Math.round(powerB[i]); //math object to round number to nearest whole number

    }
    console.log("Your Powerball is " + powerB); //console outputs the Powerball number.
}


//FL Lottery Numbers: 49,48,50,18,53,38,
//                     21,22,24,5,45,33
//                     21,16,25,40,27,23


//Powerball Lottery Numbers: 30,9,2,24,29 and the PB is 8
//                           6,5,9,20,46 and the PB is 31
//                           26,58,20,9,27 and the PB is 24









