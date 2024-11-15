// Initialize pet attributes
let hunger = 100;
let happiness = 100;
let energy = 100;

// Reference to HTML elements
const hungerBar = document.getElementById("hunger");
const happinessBar = document.getElementById("happiness");
const energyBar = document.getElementById("energy");
const petImage = document.getElementById("pet");
const message = document.getElementById("message");

const feedButton = document.getElementById("feedBtn");
const playButton = document.getElementById("playBtn");
const sleepButton = document.getElementById("sleepBtn");

// Update pet's appearance based on its attributes
function updatePet() {
    if (hunger < 40) {
        petImage.classList.add("sad");
        petImage.classList.remove("happy");
    } else if (happiness < 40) {
        petImage.classList.add("sad");
        petImage.classList.remove("happy");
    } else if (energy < 40) {
        petImage.classList.add("sad");
        petImage.classList.remove("happy");
    } else {
        petImage.classList.add("happy");
        petImage.classList.remove("sad");
    }

    // Update the progress bars
    hungerBar.value = hunger;
    happinessBar.value = happiness;
    energyBar.value = energy;
}

// Feed the pet
feedButton.addEventListener("click", function() {
    if (hunger < 100) {
        hunger += 20;
        message.textContent = "You fed the pet!";
    } else {
        message.textContent = "The pet is not hungry.";
    }
    updatePet();
});

// Play with the pet
playButton.addEventListener("click", function() {
    if (happiness < 100) {
        happiness += 20;
        energy -= 10;
        message.textContent = "You played with the pet!";
    } else {
        message.textContent = "The pet is already very happy!";
    }
    updatePet();
});

// Put the pet to sleep
sleepButton.addEventListener("click", function() {
    if (energy < 100) {
        energy += 30;
        happiness -= 10;
        message.textContent = "The pet is now sleeping!";
    } else {
        message.textContent = "The pet is not tired.";
    }
    updatePet();
});

// Automatically decrease attributes over time
setInterval(function() {
    if (hunger > 0) hunger -= 1;
    if (happiness > 0) happiness -= 1;
    if (energy > 0) energy -= 1;

    updatePet();
}, 1000);
