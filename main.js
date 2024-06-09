let numbers = document.querySelectorAll(".bdig");
let operators = document.querySelectorAll(".bope");
let clear = document.querySelector(".bclear");
let youSelected = document.querySelector("#input");
let result = document.querySelector("#result");
let history = document.querySelector(".history");

let number1 = 0;
let number2 = 0;
let arithmeticOperator = "";
let arithmeticOperatorCount = 0;
let calculation = 0;
let operator = "";

function displayNumber(event) {
  disableNumbers();
  enableOperators();
  if (!number1) {
    youSelected.innerText = event.target.innerText;
  } else if (number1 && arithmeticOperatorCount < 2) {
    youSelected.innerText = event.target.innerText;
    number2 = youSelected.innerText;
    chooseOperator();
    addToList();
    enableNumbers();
  } else if (number1) {
    number1 = result.innerText;
    youSelected.innerText = event.target.innerText;
    number2 = youSelected.innerText;
    chooseOperator();
    addToList();
    enableNumbers();
  }
}
function addToList() {
  let li = document.createElement("li");
  li.innerText = `  ${number1}  ${operator}  ${number2}     =  ${result.innerText}`;
  history.append(li);
}
function chooseOperator() {
  if (arithmeticOperator == "+") {
    result.innerText = Number(number1) + Number(number2);
    return (operator = "+");
  } else if (arithmeticOperator == "-") {
    result.innerText = Number(number1) - Number(number2);
    return (operator = "-");
  } else if (arithmeticOperator == "*") {
    result.innerText = Number(number1) * Number(number2);
    return (operator = "*");
  } else if (arithmeticOperator == "/") {
    result.innerText = Number(number1) / Number(number2);
    return (operator = "/");
  }
  calculation = result.innerText;
}
function displayOperator(event) {
  disableOperators();
  enableNumbers();
  number1 = youSelected.innerText;
  youSelected.innerText = event.target.innerText;
  arithmeticOperator = youSelected.innerText;
  arithmeticOperatorCount++;
  if (arithmeticOperator == "√x" && result.innerText) {
    number1 = Math.sqrt(Number(result.innerText));
    result.innerText = number1;
    enableOperators();
  } else if (arithmeticOperator == "√x") {
    result.innerText = Math.sqrt(Number(number1));
    calculation = result.innerText;
    enableOperators();
  } else if (arithmeticOperator == "x^2" && result.innerText) {
    number1 = Number(result.innerText) * Number(result.innerText);
    result.innerText = number1;
    enableOperators();
  } else if (arithmeticOperator == "x^2") {
    result.innerText = Number(number1) * Number(number1);
    enableOperators();
  }
}
function disableNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].disabled = true;
  }
}
function enableNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].disabled = false;
  }
}
function disableOperators() {
  for (let i = 0; i < operators.length; i++) {
    operators[i].disabled = true;
  }
}
function enableOperators() {
  for (let i = 0; i < operators.length; i++) {
    operators[i].disabled = false;
  }
}
function clearHistory() {
  enableNumbers();
  enableOperators();
  youSelected.innerText = "";
  result.innerText = "";
  history.innerHTML = "";
  number1 = 0;
  number2 = 0;
  calculation = 0;
  arithmeticOperator = "";
  arithmeticOperatorCount = 0;
  operator = "";
}
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", displayOperator);
}
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", displayNumber);
}
clear.addEventListener("click", clearHistory);
