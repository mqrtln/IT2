

// Definerer grensene/poengene for spillet, setter begge til 0 for å starte likt
var winnerScore = 5;
var playerScore = 0;
var machineScore = 0;

// Henter ut elementene i <p id=""> til de rettmessige eierne sånn at siden kan oppdatere seg med riktig data fra spillet
var playerScoreEl = document.querySelector("#playerScore"); 
var machineScoreEl = document.querySelector("#machineScore"); 
var infoEl = document.querySelector("#info"); 



// Henter idene fra html-dokumentet og gjør de til variabler
var rockEl = document.querySelector("#rock");
var paperEl = document.querySelector("#paper");
var scissorsEl = document.querySelector("#scissors");
var machineEl = document.querySelector("#machine");

// Lager knapper utifra IDene og bildene i samme slengen
rockEl.addEventListener("click", checkResult);
paperEl.addEventListener("click", checkResult);
scissorsEl.addEventListener("click", checkResult);


//Starter spillet med dette info-elementet for å dokumentere hvor mange poeng man trenger for å vinne spillet;
infoEl.innerHTML  ="Choose rock, paper or scissors. First to " + winnerScore + " points wins the game. "; 

 
//Lager en "checkResult" funkjson som vi setter "spillet" i for å sjekke hvem som vinner til slutt
function checkResult(check) {
    
    // I boken setter de parameteret i funksjonen til "e", men jeg synes dette var forvirrende, så kalle den en "check" siden den sjekker hvem som vinner
    var playerChoice = check.target.id;

    // For å gi intrykket om at maskinen velger så velger den tilfeldig hver gang mellom 1, 2 og 3 med Math.Random(Som setter et tilfeldig tall mellom 0 og 1) dermed bruker vi Math.floor(for å runde av nummeret) pluss 1 sånn at den går fra 1 - 3.
    var random = Math.floor(Math.random() * 3) + 1;
    


// Lar den være undefined nå, siden det ikke er et problem i JavaScript, etterpå setter vi machineChouce til en av tre ved å bruke Math.Random()
    var machineChoice; 
// Assigner tallene til de forskjellige elementene, her bruker vi bare strings fordi det er bare for å sjekke lenger nede i funksjonen
    if (random === 1) {
        machineChoice = "rock"; 
    } else if (random === 2){
        machineChoice  = "paper";
    } else if (random === 3){
        machineChoice ="scissors";
    }


// Endrer spørsmålstegn bilde til en av de andre bildene tilsvarende til svaret ditt, lagde nye bilder som jeg navnet machine_ også enten saks, papir eller steinsånn at den automatisk velger den den trenger 
machineEl.src = "bilder/machine_" + machineChoice + ".png";

function resetMachine(){
    machineEl.src ="bilder/machinechoice.png";
    infoEl.innerHTML = "Choose rock, paper or scissors. First to " + winnerScore + " points wins the game. "; 
}
function lostOrWon(){
    if (playerChoice++){
        infoEl.innerHTML = "You won that round, 1 point for you!"; 
    } else{
        infoEl.innerHTML = "You lost that round, 1 point to machine"; 
    }
}


// Her beviser vi hvem som vinner basert på valgene spilleren tar
if(playerChoice === machineChoice){
 // Do nothing
 infoEl.innerHTML ="It's a draw!"
 setTimeout(resetMachine, 1500);
} 

else if (playerChoice === "rock"){
    if(machineChoice === "scissors"){
        playerChoice++;
        lostOrWon();
        setTimeout(resetMachine, 1500);

    } else if (machineChoice === "paper"){
        machineScore++
        lostOrWon();
        setTimeout(resetMachine, 1500);
    }
} 

else if (playerChoice === "scissors") {
    if (machineChoice === "paper") {
        playerScore++
        lostOrWon();
        setTimeout(resetMachine, 1500);

    } else if (machineChoice === "rock"){
        machineScore++
        lostOrWon();
        setTimeout(resetMachine, 1500);
    }
} 
    else if (playerChoice === "paper") {
        if (machineChoice === "rock") {
            playerScore++
            lostOrWon();
            setTimeout(resetMachine, 1500);
        } else if (machineChoice === "scissors") {
            machineScore++
            setTimeout(resetMachine, 1500);
            lostOrWon();
        }
    } 


// Endrer poengene til vinner etter hver runde 
playerScoreEl.innerHTML = "<b>Player: </b>" + playerScore;
machineScoreEl.innerHTML = "<b>Machine: </b>" + machineScore; 



// Vinner funkjsonen, her stopper vi spillet etter hvem som fikk mest poeng og setter ut en setning som sier hvem som vant 
if (playerScore === winnerScore || machineScore === winnerScore) {
    rockEl.removeEventListener("click", checkResult);
    paperEl.removeEventListener("click", checkResult); 
    scissorsEl.removeEventListener("click", checkResult);





if(playerScore === winnerScore){
    infoEl.innerHTML = "It seems that the player is the winner!"; 
        } else{
            infoEl.innerHTML = "Awww, you got beated by machineboy!"; 
        }
    }
}
