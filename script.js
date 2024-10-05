let coinBalance = 0;
let wallet = 0;
let coinsPerClick = 1; // Coins earned per click
let profitPerHour = 0; // To be calculated
let energy = 100; // Energy for clicking

document.getElementById('hero').onclick = function() {
    earnCoins();
};

document.getElementById('earnButton').onclick = function() {
    earnCoins();
};

function earnCoins() {
    if (energy > 0) {
        coinBalance += coinsPerClick;
        wallet += coinsPerClick;
        energy -= 10; // Decrease energy on each click
        updateDisplay();
        updateEnergyBar();
    } else {
        alert("Not enough energy! Please wait to recharge.");
    }
}

function updateDisplay() {
    document.getElementById('coinBalance').innerText = coinBalance;
    document.getElementById('wallet').innerText = wallet;
    document.getElementById('profitPerHour').innerText = profitPerHour;
}

function updateEnergyBar() {
    const energyBar = document.getElementById('energyBar');
    energyBar.style.width = energy + '%';
    
    if (energy < 100) {
        setTimeout(() => {
            energy = Math.min(100, energy + 5); // Recharge energy
            updateEnergyBar();
        }, 1000); // Recharge every second
    }
}

// Start profit calculation (1 coin per minute)
setInterval(() => {
    profitPerHour += 1; // Increment profit per hour
    updateDisplay();
}, 60000); // Every minute
