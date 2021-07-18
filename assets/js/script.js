// Pseudocode==================================================
//2 Players: User & Computer
//3 Input(user)/Output(computer) Options: R, P, S
//      -Validation: if user puts in wrong input? (alert)
//      -Wrong letter case?
//Input(user): prompt-
//      -expect a string from prompt
//Random Output(computer): function-
//      -array: R, P, S
//W/L/T conditions- compare input and output
//      -logical operators:  strictly equal, not strictly equal,not equal,
//          -if it's a tie, run tie function
//          -if it's a win, run win function
//          -if it's a loss, run lose function
//Display results
//      -show winner
//      -store results in a variable (object)
//Play again?- confirmation
//      -if yes: loop play game function
//      -if no: kick out to a thank you alert
//Global Variables ===================================================================
var leaderBoard = {
	wins: 0,
	losses: 0,
	ties: 0,
};
var firstTimePlay = true;
//Initializing ========================================================================
startGame();
//Primary Function ====================================================================
function startGame() {
	//Display welcome note to user
	if (firstTimePlay) {
		welcomeNote();
	}
	//Stores user input
	var storeUserInput = inputUserPrompt();
	//Randomly selects and stores computer option
	var storeComputerInput = computerRandomSelection();
	//Compares user choice and computer choice
	winLoseTie(storeUserInput, storeComputerInput);
	//Displays results in leaderboard to user
	displayResults(storeUserInput, storeComputerInput);
	//ask user to play again
	var userPlayAgain = confirm("Would you like to play again?");
	if (userPlayAgain === true) {
		//run startGame function again
		startGame();
	}
}
//Secondary Functions ==================================================================
function welcomeNote() {
	//Welcome note
	confirm("Would you like to play rock, paper, scissors?");
	//sets globar variable firstTimePlay to false to stop the welcome note from recurring
	firstTimePlay = false;
}
function inputUserPrompt() {
	//Receives user input
	var userInput = prompt("Please enter R, P, or S.");
	return userInput.toUpperCase();
}
function computerRandomSelection() {
	//Randomly selects computer choice
	var computerOptions = ["R", "P", "S"];
	var indexVariable = Math.floor(Math.random() * computerOptions.length);
	return computerOptions[indexVariable];
}
function winLoseTie(playerOneChoice, playerTwoChoice) {
	//Compare user input to computer choice
	//check for tie result
	if (playerOneChoice === playerTwoChoice) {
		//run tie function
		tieCondition();
	}
	//check for win result
	else if (
		(playerOneChoice === "R" && playerTwoChoice === "S") ||
		(playerOneChoice === "P" && playerTwoChoice === "R") ||
		(playerOneChoice === "S" && playerTwoChoice === "P")
	) {
		//run win function
		winCondition();
	}
	//check for lose result
	else {
		//run lose function
		loseCondition();
	}
}
function displayResults(playerOneChoice, playerTwoChoice) {
	//display results in leaderboard
	alert(`
=============================
You played: ${playerOneChoice}
The computer played: ${playerTwoChoice}
=============================
Wins: ${leaderBoard.wins}
Losses: ${leaderBoard.losses}
Ties: ${leaderBoard.ties}
=============================
`);
}
// Win/Lose/Tie Functions =============================================================
function tieCondition() {
	alert("It's a tie!");
	leaderBoard.ties++;
}
function winCondition() {
	alert("It's a win!");
	leaderBoard.wins++;
}
function loseCondition() {
	alert("It's a loss!");
	leaderBoard.losses++;
}
// Authors: Gospel Chukwu and Rachel Gregg =============================================
