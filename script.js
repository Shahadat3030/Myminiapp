// Game variables
let coins = 0;
let energy = 100;
let profitPerHour = 0;
let maxEnergy = 100;
let energyRegenRate = 1;  // Energy regenerated per second

// DOM Elements
const coinCount = document.getElementById('coinCount');
const energyDisplay = document.getElementById('energy');
const energyLevel = document.getElementById('energyLevel');
const profitDisplay = document.getElementById('profitPerHour');

// Character Images
const characters = [
    "https://raw.githubusercontent.com/Shahadat3030/Myminiapp/refs/heads/main/Characters/Character1.webp",
    "https://raw.githubusercontent.com/Shahadat3030/Myminiapp/refs/heads/main/Characters/character2.webp",
    "https://raw.githubusercontent.com/Shahadat3030/Myminiapp/refs/heads/main/Characters/character3.webp",
    "https://raw.githubusercontent.com/Shahadat3030/Myminiapp/refs/heads/main/Characters/character4.webp",
    "https://raw.githubusercontent.com/Shahadat3030/Myminiapp/refs/heads/main/Characters/character5.webp",
    "https://raw.githubusercontent.com/Shahadat3030/Myminiapp/refs/heads/main/Characters/character6.webp",
    "https://raw.githubusercontent.com/Shahadat3030/Myminiapp/refs/heads/main/Characters/character7.webp",
    "https://raw.githubusercontent.com/Shahadat3030/Myminiapp/refs/heads/main/Characters/character8.webp"
];

// Set the character image when the game starts
function initializeGame() {
    const selectedCharacter = getRandomCharacter();
    document.getElementById('characterImage').src = selectedCharacter;
}

// Function to get a random character
function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

// Function to earn coins
function earnCoins() {
    if (energy > 0) {
        coins += 1;  // Increment coins by 1 per tap
        coinCount.textContent = coins;
        energy -= 5;  // Decrease energy by 5 for every tap
        updateEnergyBar();
    } else {
        alert("You're out of energy! Please wait for regeneration.");
    }
}

// Update Energy Bar Display
function updateEnergyBar() {
    energyDisplay.textContent = energy;
    energyLevel.style.width = `${energy}%`;
}

// Regenerate energy over time
setInterval(() => {
    if (energy < maxEnergy) {
        energy += energyRegenRate;  // Regenerate energy
        if (energy > maxEnergy) energy = maxEnergy;  // Cap at max energy
        updateEnergyBar();
    }
}, 1000);  // Regenerate energy every second

// Calculate profit per hour every 60 minutes (3600000 milliseconds)
setInterval(() => {
    profitPerHour = coins;  // Assuming profit per hour is based on coins earned
    profitDisplay.textContent = profitPerHour.toFixed(2);
}, 3600000);  // Update profit every hour

// Event Listener for character click
document.getElementById('characterImage').addEventListener('click', () => {
    earnCoins();
});

// Initialize the game when the page loads
window.onload = initializeGame;
