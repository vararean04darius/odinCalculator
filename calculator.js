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
    if(firstElement == 0 || secondElement == 0)
    {
        return "ERROR";
    }else return firstElement / secondElement;
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
let typingSecondNumber = false;
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
    unBlockCalculator();
};

function blockCalculator(){
    additionButton.disabled = true;
    substractionButton.disabled = true;
    multiplicationButton.disabled = true;
    divisionButton.disabled = true;
    calculateButton.disabled = true;
    oneButton.disabled = true;
    twoButton.disabled = true;
    threeButton.disabled = true;
    fourButton.disabled = true;
    fiveButton.disabled = true;
    sixButton.disabled = true;
    sevenButton.disabled = true;
    eightButton.disabled = true;
    nineButton.disabled = true;
    zeroButton.disabled = true;
    dotButton.disabled = true;
    backspaceButton.disabled = true;
}

function unBlockCalculator(){
    additionButton.disabled = false;
    substractionButton.disabled = false;
    multiplicationButton.disabled = false;
    divisionButton.disabled = false;
    calculateButton.disabled = false;
    oneButton.disabled = false;
    twoButton.disabled = false;
    threeButton.disabled = false;
    fourButton.disabled = false;
    fiveButton.disabled = false;
    sixButton.disabled = false;
    sevenButton.disabled = false;
    eightButton.disabled = false;
    nineButton.disabled = false;
    zeroButton.disabled = false;
    dotButton.disabled = false;
    backspaceButton.disabled = false;
}

function updateDisplay(){
    //parseFloat(currentDisplayed);
    display.textContent = currentDisplayed.toString().slice(0,9);
};

oneButton.addEventListener("click", function() {
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            updateDisplay();
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
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
        if(operate(operator, firstNumber, secondNumber) === "ERROR" || isNaN(operate(operator, firstNumber, secondNumber))){
            currentDisplayed = operate(operator, firstNumber, secondNumber);
            blockCalculator();
        }else currentDisplayed = parseFloat(operate(operator, firstNumber, secondNumber));
        firstNumber = currentDisplayed;
        secondNumber = 0;
        operatorSelected = false;
        dotUsed = false;
        operator = '';
        updateDisplay();
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
    typingSecondNumber = true;
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
    typingSecondNumber = true;
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
    typingSecondNumber = true;
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
    typingSecondNumber = true;
    operatorSelected = true;
    dotUsed = false;
});

dotButton.addEventListener("click", function() {
    if(dotUsed != true){
        if(currentDisplayed.toString().length == 0 || operatorSelected == true || justFinished == true){
            currentDisplayed = 0;
            operatorSelected = false;
            justFinished = false;
        }
        currentDisplayed += ".";
        updateDisplay();
    }
    dotUsed = true;
});

backspaceButton.addEventListener("click", function() {
    if(currentDisplayed.length >= 1){
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