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
const equal = document.querySelectorAll(".euqal");
const input = inputField.value;

let numberClick= false;
let operatorClick= false;

numbers.forEach(number => {
    number.addEventListener("click", function(){
        numberClick= true;
    });
});
oper.forEach(operator => {
    operator.addEventListener("click", function(){
        if (numberClick && input.length >= 0){
            operatorClick= true;
            check();
        };
    });
});

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

function check(){
    if (numberClick && operatorClick) {
        alert(operatorClicked);
        numberClick= false;
        operatorClick= false;
    };
};