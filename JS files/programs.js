var project;

function drop(dropdownID) {
    document.getElementById(dropdownID).classList.toggle("show");
    console.log("drop executed");
}

function overlayOn(projectID) {

    project = document.getElementById(projectID);

    document.getElementById("overlay").style.display = "block";
    project.style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
    project.style.display = "none";
}