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

let firstNum, secNum, mixer;

function operator(a, b, operation){
    if (operation === "+") return add(a, b);
    if (operation === "-") return substract(a, b);
    if (operation === "*") return multiply(a, b);
    if (operation === "/") return divide(a, b);
};

const container = document.querySelector(".container");

const inputField = document.querySelector(".input");

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("num")) {
        inputField.value += event.target.textContent;
    } else if (event.target.classList.contains("clear")) {
        inputField.value = "";
    };
});