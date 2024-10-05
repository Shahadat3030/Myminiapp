let coins = 0; // Total coins earned
let energy = 100; // Initial energy
const coinsPerClick = 10; // Coins earned per tap
const maxEnergy = 100; // Maximum energy
const energyDecreaseRate = 1; // Energy decrease per click

// Function to update the coin balance display
function updateBalance() {
    document.getElementById('coinBalance').innerText = coins;
}

// Tapping the hero to earn coins
document.getElementById('clickButton').addEventListener('click', () => {
    if (energy > 0) {
        coins += coinsPerClick; // Add coins on tap
        energy -= energyDecreaseRate; // Decrease energy
        updateBalance(); // Update displayed coin balance
        animateHero(); // Animate hero on tap
    } else {
        alert('Not enough energy! Wait for it to recharge.'); // Alert if no energy
    }
});

// Function to animate the hero when tapped
function animateHero() {
    const hero = document.getElementById('heroCharacter');
    hero.style.transform = 'scale(1.1)';
    setTimeout(() => {
        hero.style.transform = 'scale(1)';
    }, 200);
}

// Energy recharge over time
setInterval(() => {
    if (energy < maxEnergy) {
        energy++;
        document.getElementById('energyLevel').style.width = (energy / maxEnergy * 100) + '%';
    }
}, 1000);

// Mining coins functionality
document.getElementById('mineButton').onclick = function() {
    const responseElement = document.getElement⬤
