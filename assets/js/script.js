
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
var toggleCore = document.getElementById("create-remove-core");
toggleCore = false;
var toggleCond = document.getElementById("create-remove-cond");
toggleCond = false;

/**
 * The functions for the toggle.
 */
// Function legs
function showHideLegs() {
    if (toggleLegs === true) {
        document.getElementById('leg-head').style.display = "block";
        document.getElementById('squat').style.display = "inline-block";
        document.getElementById('deadlift').style.display = "inline-block";
        document.getElementById('calf-raise').style.display = "inline-block";
        document.getElementById('kb-swing').style.display = "inline-block";
        document.getElementById('rear-lunge').style.display = "inline-block";
    } else {
        document.getElementById('leg-head').style.display = "none";
        document.getElementById('squat').style.display = "none";
        document.getElementById('deadlift').style.display = "none";
        document.getElementById('calf-raise').style.display = "none";
        document.getElementById('kb-swing').style.display = "none";
        document.getElementById('rear-lunge').style.display = "none";
    }
    toggleLegs = !toggleLegs;
}

// Function press
function showHidePress() {
    if (togglePress === true) {
        document.getElementById('press-head').style.display = "block";
        document.getElementById('bench-press').style.display = "inline-block";
        document.getElementById('military-press').style.display = "inline-block";
        document.getElementById('cable-crossover').style.display = "inline-block";
        document.getElementById('triceps-dips').style.display = "inline-block";
        document.getElementById('lateral-raises-shoulder').style.display = "inline-block";
    } else {
        document.getElementById('press-head').style.display = "none";
        document.getElementById('bench-press').style.display = "none";
        document.getElementById('military-press').style.display = "none";
        document.getElementById('cable-crossover').style.display = "none";
        document.getElementById('triceps-dips').style.display = "none";
        document.getElementById('lateral-raises-shoulder').style.display = "none";
    }
    togglePress = !togglePress;
}

// Function pull
function showHidePull() {
    if (togglePull === true) {
        document.getElementById('pull-head').style.display = "block";
        document.getElementById('chin-ups').style.display = "inline-block";
        document.getElementById('barbell-row').style.display = "inline-block";
        document.getElementById('dumbbell-curl').style.display = "inline-block";
        document.getElementById('incline-row').style.display = "inline-block";
        document.getElementById('cable-y-raise').style.display = "inline-block";
    } else {
        document.getElementById('pull-head').style.display = "none";
        document.getElementById('chin-ups').style.display = "none";
        document.getElementById('barbell-row').style.display = "none";
        document.getElementById('dumbbell-curl').style.display = "none";
        document.getElementById('incline-row').style.display = "none";
        document.getElementById('cable-y-raise').style.display = "none";
    }
    togglePull = !togglePull;
}

// Function core
function showHideCore() {
    if (toggleCore === true) {
        document.getElementById('core-head').style.display = "block";
        document.getElementById('toestobar').style.display = "inline-block";
        document.getElementById('plank-weighted').style.display = "inline-block";
        document.getElementById('cable-twist').style.display = "inline-block";
        document.getElementById('hyperex').style.display = "inline-block";
        document.getElementById('side-bend').style.display = "inline-block";
    } else {
        document.getElementById('core-head').style.display = "none";
        document.getElementById('toestobar').style.display = "none";
        document.getElementById('plank-weighted').style.display = "none";
        document.getElementById('cable-twist').style.display = "none";
        document.getElementById('hyperex').style.display = "none";
        document.getElementById('side-bend').style.display = "none";
    }
    toggleCore = !toggleCore;
}

// Function conditioning
function showHideCond() {
    if (toggleCond === true) {
        document.getElementById('cond-head').style.display = "block";
        document.getElementById('burpees').style.display = "inline-block";
        document.getElementById('ski-erg').style.display = "inline-block";
        document.getElementById('battle-rope').style.display = "inline-block";
        document.getElementById('m-climber').style.display = "inline-block";
        document.getElementById('thruster').style.display = "inline-block";
        document.getElementById('pone').style.display = "inline-block";
    } else {
        document.getElementById('cond-head').style.display = "none";
        document.getElementById('burpees').style.display = "none";
        document.getElementById('ski-erg').style.display = "none";
        document.getElementById('battle-rope').style.display = "none";
        document.getElementById('m-climber').style.display = "none";
        document.getElementById('thruster').style.display = "none";
        document.getElementById('pone').style.display = "none";
    }
    toggleCond = !toggleCond;
}