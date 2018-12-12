var redDoorEl = document.querySelector("#r"); 
var greenDoorEl = document.querySelector("#g"); 
var blueDoorEl = document.querySelector("#b"); 

var doors = ["greenDoorEl", "redDoorEl", "blueDoorEl"]; 

redDoorEl = addEventListener("click", checkDoor);
greenDoorEl = addEventListener("click", checkDoor);
blueDoorEl = addEventListener("click", checkDoor);


function isCorrectDoor(){

    var correctDoor = ""
    var randomDoor = Math.floor((Math.random() * doors.length));
    if (randomDoor === 1) {
        correctDoor = "r";
        } else if (randomDoor === 2) {
        correctDoor = "g";
    } else {
        correctDoor = "b";
    }
    console.log(correctDoor); 
}

function checkDoor(e) {
    var pressedDoor = e.target; 

    console.log(pressedDoor.id);

    if (pressedDoor.id === "r") {
        isCorrectDoor();
        console.log("You clicked the red door"); 
    } else if (pressedDoor.id === "g") {
        isCorrectDoor();
        console.log("You clicked the green door");
    } else {
        isCorrectDoor();
        console.log("You clicked the blue door");
    }
}


