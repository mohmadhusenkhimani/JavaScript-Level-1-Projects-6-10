// Function to check whether a number is Even or Odd
function CheckEvenOdd() {

    // Get the number value from the input field with id "number"
    // It returns string, but JS automatically converts to number in arithmetic
    let number = document.getElementById("number").value;

    // Check if number is divisible by 2
    if (number % 2 == 0) {

        // If remainder is 0 → number is Even
        document.getElementById("result").innerText = "Result: Even";
    }
    else {

        // Otherwise → number is Odd
        document.getElementById("result").innerText = "Result: Odd";
    }
}
