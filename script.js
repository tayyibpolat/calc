function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

let firstNum = null, secNum = null, operatorClicked = null;

function operator(a, b, operation){
    if (operation === "+") return add(a, b);
    if (operation === "-") return subtract(a, b);
    if (operation === "*") return multiply(a, b);
    if (operation === "/") return divide(a, b);
}

const container = document.querySelector(".container");
const inputField = document.querySelector(".input");
const numbers = document.querySelectorAll(".num");
const oper = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");

let numberClick = false;
let operatorClick = false;

numbers.forEach(number => {
    number.addEventListener("click", function() {
        numberClick = true;
    });
});

oper.forEach(operator => {
    operator.addEventListener("click", function() {
        if (numberClick) {
            operatorClick = true;
            check();
        }
    });
});

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("num")) {
        if (operatorClicked === null) {
            if (inputField.value === "0") {
                inputField.value = event.target.textContent;
            } else {
                inputField.value += event.target.textContent;
            }
        } else {
            if (secNum === null) {
                inputField.value = event.target.textContent;
                secNum = inputField.value;
            } else {
                inputField.value += event.target.textContent;
                secNum = inputField.value;
            }
        }
    } else if (event.target.classList.contains("clear")) {
        inputField.value = "0";
        firstNum = secNum = operatorClicked = null;
    } else if (event.target.classList.contains("op")) {
        if (firstNum === null) {
            firstNum = inputField.value;
        }
        operatorClicked = event.target.textContent;
    } else if (event.target.classList.contains("equal")) {
        if (firstNum !== null && secNum !== null && operatorClicked !== null) {
            const result = operator(parseFloat(firstNum), parseFloat(secNum), operatorClicked);
            inputField.value = result;
            firstNum = secNum = operatorClicked = null;
        }
    }
});

function check() {
    if (numberClick && operatorClick) {
        if (firstNum === null) {
            firstNum = inputField.value;
        }
        numberClick = false;
        operatorClick = false;
    }
}
