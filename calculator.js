function addition(firstElement, secondElement){
    console.log(firstElement + secondElement);
}

const additionButton = document.getElementById("addition");

additionButton.addEventListener("click", function() {
    addition(2, 2);
});