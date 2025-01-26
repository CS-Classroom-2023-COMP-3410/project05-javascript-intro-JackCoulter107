const display = document.getElementById("display");
let currentInput = "0";
let previousInput = null;
let operator = null;
let memory = 0;

// Update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Clear all inputs
function clearAll() {
  currentInput = "0";
  previousInput = null;
  operator = null;
  updateDisplay(currentInput);
}

// Perform calculation
function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  if (isNaN(num1) || isNaN(num2)) return;

  switch (operator) {
    case "+":
      currentInput = (num1 + num2).toString();
      break;
    case "-":
      currentInput = (num1 - num2).toString();
      break;
    case "*":
      currentInput = (num1 * num2).toString();
      break;
    case "/":
      currentInput = num2 === 0 ? "Error" : (num1 / num2).toString();
      break;
    default:
      return;
  }

  operator = null;
  previousInput = null;
  updateDisplay(currentInput);
}

// Handle button clicks
document.querySelector(".buttons").addEventListener("click", (e) => {
  const target = e.target;
  const value = target.dataset.value;
  const action = target.dataset.action;

  if (target.classList.contains("number")) {
    currentInput = currentInput === "0" ? value : currentInput + value;
    updateDisplay(currentInput);
  }

  if (target.classList.contains("operator")) {
    if (previousInput !== null) calculate();
    operator = value;
    previousInput = currentInput;
    currentInput = "0";
  }

  if (action === "equal") {
    calculate();
  }

  if (action === "clear") {
    clearAll();
  }

  if (action === "sqrt") {
    currentInput = parseFloat(currentInput) < 0 ? "Error" : Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay(currentInput);
  }

  if (action === "mr") {
    currentInput = memory.toString();
    updateDisplay(currentInput);
  }

  if (action === "mc") {
    memory = parseFloat(currentInput) || 0;
  }

  if (target.classList.contains("decimal")) {
    if (!currentInput.includes(".")) {
      currentInput += ".";
      updateDisplay(currentInput);
    }
  }
});
