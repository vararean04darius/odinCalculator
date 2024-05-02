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
    justFinished = false;
    typingSecondNumber = false;
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
    if(justFinished == true && parseFloat(currentDisplayed) % 1 != 0){
        currentDisplayed = Math.round(parseFloat(currentDisplayed) * 100000) / 100000;
        display.textContent = currentDisplayed.toString().slice(0,9);
    }else{
        display.textContent = currentDisplayed.toString().slice(0,9);
    }
};

function addNumberToDisplay(x){
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
            updateDisplay();
        }
        if(currentDisplayed == '0'){
            currentDisplayed = x.toString();
            updateDisplay();
        }else{
            currentDisplayed += x.toString();
            updateDisplay();
        }
    }
}

function addZeroToDisplay(){
    if(currentDisplayed.toString().length < 9 || typingSecondNumber == true){
        if(operatorSelected == true || justFinished == true){
            currentDisplayed = '';
            operatorSelected = false;
            justFinished = false;
            typingSecondNumber = false;
            updateDisplay();
        }
        if(currentDisplayed != '0'){
            currentDisplayed += "0";
        }
        updateDisplay();
    }
}

function calculateFunction(){
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
        justFinished = true;
        updateDisplay();
    }
}

function addFunction(){
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
}

function substactFunction(){
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
}

function multiplicationFunction(){
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
}

function divisionFunction(){
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
}

function dotFunction(){
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
}

function removeFunction(){
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
}

oneButton.addEventListener("click", function() {addNumberToDisplay(1)});
twoButton.addEventListener("click", function() {addNumberToDisplay(2)});
threeButton.addEventListener("click", function() {addNumberToDisplay(3)});
fourButton.addEventListener("click", function() {addNumberToDisplay(4)});
fiveButton.addEventListener("click", function() {addNumberToDisplay(5)});
sixButton.addEventListener("click", function() {addNumberToDisplay(6)});
sevenButton.addEventListener("click", function() {addNumberToDisplay(7)});
eightButton.addEventListener("click", function() {addNumberToDisplay(8)});
nineButton.addEventListener("click", function() {addNumberToDisplay(9)});
calculateButton.addEventListener("click", function() {calculateFunction()});
zeroButton.addEventListener("click", function() {addZeroToDisplay()});
clearButton.addEventListener("click", function() {clear()});
additionButton.addEventListener("click", function() {addFunction()});
substractionButton.addEventListener("click", function() {substactFunction()});
multiplicationButton.addEventListener("click", function() {multiplicationFunction()});
divisionButton.addEventListener("click", function() {divisionFunction()});
dotButton.addEventListener("click", function() {dotFunction()});
backspaceButton.addEventListener("click", function() {removeFunction()});

//Below this part there's the keyboard events

document.addEventListener("keydown", function(event) {
    if (event.key === "1") {
        addNumberToDisplay(1);
    }
    if (event.key === "2") {
        addNumberToDisplay(2);
    }
    if (event.key === "3") {
        addNumberToDisplay(3);
    }
    if (event.key === "4") {
        addNumberToDisplay(4);
    }
    if (event.key === "5") {
        addNumberToDisplay(5);
    }
    if (event.key === "6") {
        addNumberToDisplay(6);
    }
    if (event.key === "7") {
        addNumberToDisplay(7);
    }
    if (event.key === "8") {
        addNumberToDisplay(8);
    }
    if (event.key === "9") {
        addNumberToDisplay(9);
    }
    if (event.key === "0") {
        addZeroToDisplay();
    }
    if (event.key === "+"){
        addFunction();
    }
    if (event.key === "-"){
        substactFunction();
    }
    if (event.key === "*" || event.key === "x"){
        multiplicationFunction();
    }
    if (event.key === "/" || event.key === ":"){
        divisionFunction();
    }
    if (event.key === "Enter"){
        calculateFunction();
    }
    if (event.key === "Backspace"){
        removeFunction();
    }
    if (event.key === "Delete"){
        clear();
    }
    if (event.key === "."){
        dotFunction();
    }
  });