function addition(firstElement, secondElement){
    return firstElement + secondElement;
}
function substraction(firstElement, secondElement){
    return firstElement - secondElement;
}
function multiplication(firstElement, secondElement){
    return firstElement * secondElement;
}
function division(firstElement, secondElement){
    return firstElement / secondElement;
}

function operate(operator, firstElement, secondElement){
    if(operator == '+') return addition(firstElement, secondElement);
    if(operator == '-') return substraction(firstElement, secondElement);
    if(operator == 'x') return multiplication(firstElement, secondElement);
    if(operator == '/') return division(firstElement, secondElement);
}

let firstNumber = 0;
let operator = '';  
let secondNumber = 0;
let currentDisplayed = '';
let operatorSelected = false;
let dotUsed = false;
let justFinished = false;
const display = document.getElementById("display");
const container = document.getElementById("container");
const additionButton = document.getElementById("addition");
const substractionButton = document.getElementById("substraction");
const multiplicationButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("equals");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const dotButton = document.getElementById("dot");
const backspaceButton = document.getElementById("backspace");

updateDisplay();
function clear(){
    currentDisplayed = '';
    operator = '';
    firstNumber = secondNumber = 0;
    dotUsed = false;
    operatorSelected = false;
    updateDisplay();
};

function updateDisplay(){
    //parseFloat(currentDisplayed);
    display.textContent = currentDisplayed;
    console.log(currentDisplayed);
};

oneButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "1";
            updateDisplay();
        }else{
            currentDisplayed += "1";
            updateDisplay();
        }
    }
});
twoButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "2";
            updateDisplay();
        }else{
            currentDisplayed += "2";
            updateDisplay();
        }
    }
});
threeButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "3";
            updateDisplay();
        }else{
            currentDisplayed += "3";
            updateDisplay();
        }
    }
});
fourButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "4";
            updateDisplay();
        }else{
            currentDisplayed += "4";
            updateDisplay();
        }
    }
});
fiveButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "5";
            updateDisplay();
        }else{
            currentDisplayed += "5";
            updateDisplay();
        }
    }
});
sixButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "6";
            updateDisplay();
        }else{
            currentDisplayed += "6";
            updateDisplay();
        }
    }
});
sevenButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "7";
            updateDisplay();
        }else{
            currentDisplayed += "7";
            updateDisplay();
        }
    }
});
eightButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "8";
            updateDisplay();
        }else{
            currentDisplayed += "8";
            updateDisplay();
        }
    }
});
nineButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed == '0'){
            currentDisplayed = "9";
            updateDisplay();
        }else{
            currentDisplayed += "9";
            updateDisplay();
        }
    }
});
zeroButton.addEventListener("click", function() {
    if(currentDisplayed.length < 9){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
        }
        if(currentDisplayed != '0'){
            currentDisplayed += "0";
        }
        updateDisplay();
    }
});

calculateButton.addEventListener("click", function() {
    if(operator !== ''){
        secondNumber = parseFloat(currentDisplayed);
        firstNumber = currentDisplayed = operate(operator, firstNumber, secondNumber);
        secondNumber = 0;
        operatorSelected = false;
        dotUsed = false;
        operator = '';
        updateDisplay();
        console.log("dupa ce am calculat, firstNumber: " + firstNumber + " si secondNumber: " + secondNumber);
        justFinished = true;
    }
});

clearButton.addEventListener("click", function() {
    clear();
});

additionButton.addEventListener("click", function() {
    if(operator === ''){
        secondNumber = firstNumber = parseFloat(currentDisplayed);
    }else{
            secondNumber = parseFloat(currentDisplayed);
            firstNumber = currentDisplayed = operate(operator, firstNumber, secondNumber);
            secondNumber = 0;
            updateDisplay();
        }
    operator = "+";
    operatorSelected = true;
    dotUsed = false;
});

substractionButton.addEventListener("click", function() { 
    if(operator === ''){
        secondNumber = firstNumber = parseFloat(currentDisplayed);
    }else{
            secondNumber = parseFloat(currentDisplayed);
            firstNumber = currentDisplayed = operate(operator, firstNumber, secondNumber);
            secondNumber = 0;
            updateDisplay();
        }
    operator = "-";
    operatorSelected = true;
    dotUsed = false;
});

multiplicationButton.addEventListener("click", function() {
    if(operator === ''){
        secondNumber = firstNumber = parseFloat(currentDisplayed);
    }else{
            secondNumber = parseFloat(currentDisplayed);
            firstNumber = currentDisplayed = operate(operator, firstNumber, secondNumber);
            secondNumber = 0;
            updateDisplay();
        }
    operator = "x";
    operatorSelected = true;
    dotUsed = false;
});

divisionButton.addEventListener("click", function() {
    if(operator === ''){
        secondNumber = firstNumber = parseFloat(currentDisplayed);
    }else{
            secondNumber = parseFloat(currentDisplayed);
            firstNumber = currentDisplayed = operate(operator, firstNumber, secondNumber);
            secondNumber = 0;
            updateDisplay();
        }
    operator = "/";
    operatorSelected = true;
    dotUsed = false;
});

dotButton.addEventListener("click", function() {
    if(dotUsed != true){
        if(currentDisplayed.length == 0 || operatorSelected == true){
            currentDisplayed = 0;
            operatorSelected = false;
        }
        currentDisplayed += ".";
        updateDisplay();
    }
    dotUsed = true;
});

backspaceButton.addEventListener("click", function() {
    if(currentDisplayed.length >= 1){
        console.log(currentDisplayed.charAt(currentDisplayed.length - 1));
        if(currentDisplayed.charAt(currentDisplayed.length - 1) == '.'){
            currentDisplayed = currentDisplayed.slice(0, -1);
            updateDisplay();
            dotUsed = false;
        }else{
            currentDisplayed = currentDisplayed.slice(0, -1);
            updateDisplay();
        }
    }
});