let homescore = document.getElementById("home-score");
let guestscore = document.getElementById("guest-score");

let homeCounter = 0;
let guestCounter = 0;

homescore.textContent = homeCounter;
guestscore.textContent = guestCounter;

function addOneH() {
    homeCounter += 1;
    homescore.textContent = homeCounter;
}

function addTwoH() {
    homeCounter += 2;
    homescore.textContent = homeCounter;
}

function addThreeH() {
    homeCounter += 3;
    homescore.textContent = homeCounter;
}

function addOneG() {
    guestCounter += 1;
    guestscore.textContent = guestCounter;
}

function addTwoG() {
    guestCounter += 2;
    guestscore.textContent = guestCounter;
}

function addThreeG() {
    guestCounter += 3;
    guestscore.textContent = guestCounter;
}

function reset() {
    homeCounter = 0;
    guestCounter = 0;
    homescore.textContent = homeCounter;
    guestscore.textContent = guestCounter;
}