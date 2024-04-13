let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let buttonElement = document.getElementById("button");
let bg_container = document.getElementById("bgContainer");
bg_container.style.backgroundColor = bgColorsArray[0];

function clickMe() {
    let numberOfBgColors = bgColorsArray.lenghth;
    let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColors);
    let randomBgColor = bgColorsArray[randomBgColorIndex];
    bg_container.style.backgroundColor = randomBgColor;
}