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

let numberClick= false;
let operatorClick= false;

numbers.forEach(number => {
    number.addEventListener("click", function(){
        numberClick= true;
    });
});
oper.forEach(operator => {
    operator.addEventListener("click", function(){
        if (numberClick){
            operatorClick= true;
            check();
        };
    });
});

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("num")) {
        if (inputField.value === "0")
          inputField.value = event.target.textContent;
        else{
            inputField.value += event.target.textContent;
        }
    } else if (event.target.classList.contains("clear")) {
        inputField.value = "0";
    } else if (event.target.classList.contains("op")) {
        operatorClicked = event.target.textContent;
    };
});

function check(){
    if (numberClick && operatorClick) {
        firstNum = inputField.value;
        alert (firstNum);
        numberClick = false;
        operatorClick = false;
    };
};