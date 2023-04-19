// Targets the id:s for boxes
let squatEx = document.getElementById("squat");
let deadEx = document.getElementById("deadlift");
let ttbEx = document.getElementById("toestobar");
let benchPressEx = document.getElementById("bench-press");
let plankEx = document.getElementById("plank-weighted");


/**
 * Function to remove all boxes, not decided yet if 
 * it's gonna be one for each instance or one that controls everything.
 */
function resetLegs(event) {
    squatEx.style.display = "none";
    deadEx.style.display = "none";
}

function resetCore(event) {
    ttbEx.style.display = "none";
    plankEx.style.display = "none";
}

function resetPress(event) {
    benchPressEx.style.display = "none";
}

// Funtion for creating Leg exercises
document.getElementById("create-legs").onclick = function createLegs() {
    document.getElementById("squat").style.display = "inline-block";
    document.getElementById("deadlift").style.display = "inline-block";
}

// Function for creating Ab exercises
document.getElementById("create-core").onclick = function createCore() {
    document.getElementById("toestobar").style.display = "inline-block";
    document.getElementById("plank-weighted").style.display = "inline-block";

}

// Function for creating Press exercises
document.getElementById("create-press").onclick = function createPress() {
    document.getElementById("bench-press").style.display = "inline-block";
}