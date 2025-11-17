// // Generate a random number between 1 to 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// // Function to check user's guess
function checkGuess() {

    // // Get user input
    let guess = document.getElementById("guessInput").value;

    // // Convert guess into number
    guess = Number(guess);

    // // Check if guess matches the secret number
    if(guess === secretNumber) {
        // // Correct guess
        document.getElementById("result").innerText = "🎉 Correct! You guessed the number.";
    }
    else {
        // // Wrong guess
        document.getElementById("result").innerText = "❌ Wrong guess! Try again.";
    }
}
