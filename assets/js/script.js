// Targets the id:s for boxes
let squatEx = document.getElementById("squat");
let deadEx = document.getElementById("deadlift");
let calfEX = document.getElementById("calf-raise");
let kbswingEx = document.getElementById("kb-swing");
let rlungeEx = document.getElementById("rear-lunge");
let ttbEx = document.getElementById("toestobar");
let plankEx = document.getElementById("plank-weighted");
let benchPressEx = document.getElementById("bench-press");
let mpressEx = document.getElementById("military-press");
let chins = document.getElementById("chin-ups");

/**
 * Here below we have the variables for the toggle functions further down.
 * Found the tips for the toggle function on Stackoverflow.com in a
 * comment on changing the color of a div by pressing it.
 */
var toggleLegs = document.getElementById("create-remove-legs");
toggleLegs = false;
var togglePress = document.getElementById("create-remove-press");
togglePress = false;
var togglePull = document.getElementById("create-remove-pull");
togglePull = false;

/**
 * The functions for the toggle.
 */
// Function legs
function showHideLegs() {
    if (toggleLegs === true) {
        document.getElementById('squat').style.display = "inline-block";
        document.getElementById('deadlift').style.display = "inline-block";
        document.getElementById('calf-raise').style.display = "inline-block";
        document.getElementById('kb-swing').style.display = "inline-block";
        document.getElementById('rear-lunge').style.display = "inline-block";
    } else {
        document.getElementById('squat').style.display = "none";
        document.getElementById('deadlift').style.display = "none";
        document.getElementById('calf-raise').style.display = "none";
        document.getElementById('kb-swing').style.display = "none";
        document.getElementById('rear-lunge').style.display = "none";
    }
    toggleLegs = !toggleLegs;
};

// Function press
function showHidePress() {
    if (togglePress === true) {
        document.getElementById('bench-press').style.display = "inline-block";
        document.getElementById('military-press').style.display = "inline-block";
        document.getElementById('cable-crossover').style.display = "inline-block";
        document.getElementById('triceps-dips').style.display = "inline-block";
        document.getElementById('lateral-raises-shoulder').style.display = "inline-block";
    } else {
        document.getElementById('bench-press').style.display = "none";
        document.getElementById('military-press').style.display = "none";
        document.getElementById('cable-crossover').style.display = "none";
        document.getElementById('triceps-dips').style.display = "none";
        document.getElementById('lateral-raises-shoulder').style.display = "none";
    }
    togglePress = !togglePress;
};

// Function pull
function showHidePull() {
    if (togglePull === true) {
        document.getElementById('chin-ups').style.display = "inline-block";
        document.getElementById('barbell-row').style.display = "inline-block";
        document.getElementById('dumbbell-curl').style.display = "inline-block";
        document.getElementById('incline-row').style.display = "inline-block";
        document.getElementById('cable-y-raise').style.display = "inline-block";
    } else {
        document.getElementById('chin-ups').style.display = "none";
        document.getElementById('barbell-row').style.display = "none";
        document.getElementById('dumbbell-curl').style.display = "none";
        document.getElementById('incline-row').style.display = "none";
        document.getElementById('cable-y-raise').style.display = "none";
    }
    togglePull = !togglePull;
};