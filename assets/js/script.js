/**
 * This will be the main function for the submit button.
 * It's suppossed to generate 3 GIFs (1 compound and 2 specific movements).
 */
document.getElementsByClassName("submit", function() {
    var showSession = document.getElementById("squat");
    if (showSession.style.display === "none") {
        showSession.style.display = "flex";
    }
})