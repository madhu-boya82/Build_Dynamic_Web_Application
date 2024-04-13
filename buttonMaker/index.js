let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton")


function customButton() {
    let bgColor = bgColorInputElement.value;
    let fontColor = fontColorInputElement.value;
    let fontSize = fontSizeInputElement.value;
    let fontWeight = fontWeightInputElement.value;
    let padding = paddingInputElement.value;
    let borderRadius = borderRadiusInputElement.value;

    customButtonElement.style.backgroundColor = "bgColor";
    customButtonElement.style.fontFamily = "fontColor";
    customButtonElement.style.fontSize = "fontSize";
    customButtonElement.style.fontWeight = "fontWeight";
    customButtonElement.style.padding = "padding";
    customButtonElement.style.borderRadius = "borderRadius";
};