// Function to calculate BMI and show category
function calculateBMI() {

    // Get weight value from input field and convert it to a floating number
    let weight = parseFloat(document.getElementById("weight").value);

    // Get height value from input field and convert it to a floating number
    let height = parseFloat(document.getElementById("height").value);

    // Calculate BMI using formula: BMI = weight / (height * height)
    let bmi = weight / (height * height);

    // Display BMI value up to 2 decimal places
    document.getElementById("result").innerText = "BMI: " + bmi.toFixed(2);

    // Variable to store which BMI category the user belongs to
    let category;

    // Check BMI range conditions
    if (bmi < 18.5) {
        // BMI less than 18.5 → Underweight
        category = "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        // BMI between 18.5 to 24.9 → Normal Weight
        category = "Normal Weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        // BMI between 25 to 29.9 → Overweight
        category = "Overweight";
    }
    else {
        // BMI 30 and above → Obese
        category = "Obese";
    }

    // Display the category result on the page
    document.getElementById("category").innerText = "Category: " + category;
}
