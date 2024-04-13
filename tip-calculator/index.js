let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

function calculatedTip() {
    let inputValue = billAmountElement.value;
    let percentageValue = percentageTipElement.value;
    if (inputValue == "") {
        errorMessageElement.textContent = "Please Enter a valid Input";
    } else if (percentageValue == "") {
        errorMessageElement.textContent = "Please Enter a valid Input";
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(inputValue);
        let percentageTip = parseInt(percentageValue);
        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;
        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = calculatedTotal;
    }
}