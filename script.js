const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".op");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

// Append numbers to display
numberButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (shouldResetDisplay) {
            display.value = "";
            shouldResetDisplay = false;
        }
        display.value += btn.innerText;
    });
});

// Handle operator click
operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        firstNumber = display.value;
        currentOperator = btn.innerText;
        shouldResetDisplay = true; // Next number replaces display
    });
});

// When user clicks "="
equalsButton.addEventListener("click", () => {
    if (currentOperator === null) return;

    secondNumber = display.value;

    let result = calculate(Number(firstNumber), Number(secondNumber), currentOperator);
    display.value = result;

    // Reset for next calculation
    firstNumber = result;
    currentOperator = null;
});

// Clear button
clearButton.addEventListener("click", () => {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
});

// Calculation function
function calculate(a, b, op) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b === 0 ? "Error" : a / b;
        default: return "";
    }
}
