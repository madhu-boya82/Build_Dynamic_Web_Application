let counterValueEl = document.getElementById("counterValue");
let clickCountEl = document.getElementById("clickCount");

if (clickCountEl === null) {
    counterValueEl.textContent = 0;
} else {
    counterValueEl.textContent = clickCount;
}

function onIncrementCount() {
    let previousCounterValue = counterValueEl.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    localStorage.setItem("clickCount", updatedCounterValue);
    counterValueEl.textContent = updatedCounterValue;

}