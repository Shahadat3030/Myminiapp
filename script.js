// Function to update the balance
function updateBalance() {
    const balanceDisplay = document.getElementById('balance');
    const coinsPerHour = 0; // Set the earning rate if needed
    let currentBalance = parseInt(balanceDisplay.textContent.split(' ')[1]); // Get current balance from display
    let newBalance = currentBalance + Math.floor(Math.random() * 10); // Simulate earning random coins between 0-10
    balanceDisplay.textContent = `Balance: ${newBalance} SproutCoins`; // Update balance display
}

// Function to simulate earning SproutCoins when button is clicked
function earnCoins() {
    const earnButton = document.getElementById('earn-button');
    earnButton.addEventListener('click', () => {
        updateBalance();
    });
}

// Function to initialize the app
function init() {
    earnCoins(); // Set up the earn coins button functionality
}

// Run the initialization function on page load
window.onload = init;
