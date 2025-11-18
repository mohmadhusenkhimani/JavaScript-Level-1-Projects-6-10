// // Function to convert temperature
function convertTemp() {

    // // Get value entered by user
    let temp = document.getElementById("tempInput").value;

    // // Get selected unit (C or F)
    let unit = document.getElementById("unitSelect").value;

    // // Variable for storing result
    let converted;

    // // Check which conversion user selected
    if(unit === "C") {
        // // Celsius to Fahrenheit formula
        converted = (temp * 9/5) + 32;
    }
    else {
        // // Fahrenheit to Celsius formula
        converted = (temp - 32) * 5/9;
    }

    // // Display result
    document.getElementById("result").innerText = "Result: " + converted.toFixed(2);
}
