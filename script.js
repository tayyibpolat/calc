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
const inputField = document.querySelector(".input");
const numbers = document.querySelectorAll(".num");
const oper = document.querySelectorAll(".op");

let first = false;
let sec = false;

numbers.forEach(number => {
    number.addEventListener("click", function(){
        first = true;
        check();
    });
});
oper.forEach(operator => {
    operator.addEventListener("click", function(){
        sec = true;
        check();
    });
});

function check(){
    if (first && sec) {
        alert ("true");
        first = false;
        sec = false;
    };
};

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
