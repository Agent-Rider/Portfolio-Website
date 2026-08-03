function drop(dropdownID) {
    document.getElementById(dropdownID).classList.toggle("show");
    console.log("drop executed");
}

function overlayOn(overlayID) {
    document.getElementById(overlayID).style.display = "block";
}

function overlayOff(overlayID) {
    document.getElementById(overlayID).style.display = "none";
}