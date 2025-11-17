// Declare global variables to store input numbers and result
var a, b, c;

// Function for Addition
function Addition() {

    // Get the first number from input field and convert to Number
    a = Number(document.getElementById("firstnumber").value);

    // Get the second number from input field and convert to Number
    b = Number(document.getElementById("secondnumber").value);

    // Perform addition
    c = a + b;

    // Display the result inside the element with id "result"
    document.getElementById("result").innerText = c;
}

// Function for Subtraction
function Subtraction() {

    // Read the first number
    a = Number(document.getElementById("firstnumber").value);

    // Read the second number
    b = Number(document.getElementById("secondnumber").value);

    // Perform subtraction
    c = a - b;

    // Show result
    document.getElementById("result").innerText = c;
}

// Function for Multiplication
function Multiplication() {

    // Read input values
    a = Number(document.getElementById("firstnumber").value);
    b = Number(document.getElementById("secondnumber").value);

    // Multiply
    c = a * b;

    // Display the answer
    document.getElementById("result").innerText = c;
}

// Function for Division
function Division() {

    // Read input values
    a = Number(document.getElementById("firstnumber").value);
    b = Number(document.getElementById("secondnumber").value);

    // Check if denominator is not zero
    if (b != 0) {

        // Perform division
        c = a / b;

        // Print result
        document.getElementById("result").innerText = c;
    } 
    else {

        // Error message when b = 0
        document.getElementById("result").innerText = "Number cannot be divided by 0.";
    }
}
