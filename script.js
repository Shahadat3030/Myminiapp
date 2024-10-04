document.getElementById('mineButton').onclick = function() {
    const responseElement = document.getElementById('response');
    responseElement.innerText = "Mining coins...";
    
    setTimeout(function() {
        responseElement.innerText = "Success! You've mined 50 SproutCoins.";
        responseElement.style.color = '#4caf50'; // Success message color
    }, 2000); // Simulate mining delay
};

document.getElementById('checkBalanceButton').onclick = function() {
    const responseElement = document.getElementById('response');
    responseElement.innerText = "Checking balance...";
    
    setTimeout(function() {
        responseElement.innerText = "Your balance is 500 SproutCoins.";
        responseElement.style.color = '#00897b'; // Informational color
    }, 1500); // Simulate checking balance
};

document.getElementById('statsButton').onclick = function() {
    const responseElement = document.getElementById('response');
    responseElement.innerText = "Loading stats...";
    
    setTimeout(function() {
        responseElement.innerText = "You are ranked #25 with 1500 SproutCoins.";
        responseElement.style.color = '#8e44ad'; // Stats color
    }, 1800); // Simulate stats loading
};

