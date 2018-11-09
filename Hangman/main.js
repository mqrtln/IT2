var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");




// Gets the text element
var textFieldEl = document.querySelector("#letter"); 


// Gets the thrre p-elements
var chancesLeftEl = document.querySelector("#chancesLeft");
var correctLettersEl = document.querySelector("#correctLetters");
var usedLettersEl = document.querySelector("#usedLetters");

// Gets the button
var buttonEl = document.querySelector("#button"); 
// Connects an event with the button
buttonEl.addEventListener("click", getLetter);      

//Variable that contains the correct word
var correctWord = "GAYBABY"; 
// Array that contains all used letters
var usedLetters = []; 
// Array that contains the correct letters
var correctLetters = ["_", "_", "_", "_", "_", "_", "_"];


// Variable that contains the chances the players gonna get
var chances = 6; 


//Draws the gallow
drawGallows(); 


// Shows right amount of letters in the correct words
correctLettersEl.innerHTML = "Correct letters: " + correctLetters; 

function getLetter() {
    console.log("You pressed the button.");
}


// Gets the letter from the submit field
var guessedLetter = textFieldEl.value; 
//Capitalizes the letter 
guessedLetter = guessedLetter.guessedLetter.toUpperCase();

//Checks if the letter is already taken 

if(usedLetters.indexOf(guessedLetter) === -1){

    usedLetters.push(guessedLetter);


    if (correctWord.indexOf(correctLetters) === -1){
        chances -= 1;
    
}   else{

    for (var i = 0; i < correctWord.length; i++){
        if(correctLetters[i] === guessedLetter){
            
            correctLetters[i] = guessedLetter;

            }
        }
    }    
} else {
        alert ("The letter is already guessed!");

}
guessedLetter.sort(); 

usedLettersEl.innerHTML = "Used letters: " + usedLetters; 
correctLettersEl.innerHTML = "Correct letters: " + correctLetters;
chancesLeftEl.innerHTML  = "Chances left: " + chances;   


if(chances === 5){
    drawHead(); 

} else if(chances === 4){
    drawBody();
} else if(chances === 3){
    drawLeftArm();
} else if(chances === 2){
    drawRightArm();
} else if(chances === 1){
    drawLeftLeg();
}else if(chances === 0){
    drawRightLeg();
}



function drawGallows(){
    ctx.beginPath();
    ctx.moveTo(100, 320); //Down to the left
    ctx.lineTo(100, 300); // Straight up
    ctx.lineTo(500, 300); // Down right
    ctx.lineTo(500, 320); // Down to the right
    ctx.moveTo(200, 300); // End of the thing
    ctx.lineTo(200, 20); // Top of the thing
    ctx.lineTo(350, 20);  // Move to right
    ctx.lineTo(350, 50); // Little down
    ctx.lineWidth = 5;
    ctx.stroke();
}
function drawHead(){
    ctx.beginPath();
    ctx.arc(350, 75, 25, 0, Math.PI*2); //Circle width radius 75
    ctx.stroke();
}
function drawBody() {
    ctx.beginPath();
    ctx.moveTo(350, 100); 
    ctx.lineTo(350, 225);
    ctx.stroke();
}
function drawLeftArm(){
    ctx.beginPath(); 
    ctx.moveTo(350, 125);
    ctx.lineTo(300, 175);
    ctx.stroke(); 
}
function drawRightArm() {
    ctx.beginPath();
    ctx.moveTo(350, 125);
    ctx.lineTo(400, 175);
    ctx.stroke();
}
function drawLeftLeg() {
    ctx.beginPath();
    ctx.moveTo(350, 225);
    ctx.lineTo(300, 275);
    ctx.stroke();
}
function drawRightLeg() {
    ctx.beginPath();
    ctx.moveTo(350, 225);
    ctx.lineTo(400, 275);
    ctx.stroke();
}


