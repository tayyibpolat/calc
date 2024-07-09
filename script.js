function add(a, b){
    return a + b;
};
function substract(a, b){
    return a - b;
};
function multiply(a, b){
    return a * b;
};
function divide(a, b){
    return a / b;
};

let firstNum, secNum, operatorClicked;

function operator(a, b, operation){
    if (operation === "+") return add(a, b);
    if (operation === "-") return substract(a, b);
    if (operation === "*") return multiply(a, b);
    if (operation === "/") return divide(a, b);
};

const container = document.querySelector(".container");
const numbers = document.querySelectorAll("button.num")
const operators = document.querySelectorAll("button.op");
const inputField = document.querySelector(".input");

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("num")) {
        inputField.value += event.target.textContent;
        firstNum = inputField.value;
    } else if (event.target.classList.contains("clear")) {
        inputField.value = "";
    } else if (event.target.classList.contains("op")) {
        operatorClicked = event.target.textContent;
    };
});
