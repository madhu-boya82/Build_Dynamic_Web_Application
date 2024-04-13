let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");


function restartGame() {
    let firstNumberRandom = Math.ceil(Math.random() * 100);
    let secondNumberRandom = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstNumberRandom;
    secondNumberElement.textContent = secondNumberRandom;
    gameResultElement.textContent = "";
    userInput.value = "";
}
restartGame();


function onMessage() {
    let isEqualTo = parseInt(firstNumberElement.textContent) + parseInt(secondNumberElement.textContent);
    let userInput = parseInt(userInputElement.value);
    if (userInput == isEqualTo) {
        gameResultElement.textContent = "Congratulations! You Got It Right.";
        gameResultELement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "Please Try Again.";
        gameResultElement.style.backgroundColor = "#1e217c"
    }
};