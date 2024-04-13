let checkBoxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "checkbox";
checkBoxWithLabelContainerEl.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "I am a label ";
labelEl.id = "checkboxLabel";
checkBoxWithLabelContainerEl.appendChild(labelEl);

function onCheckBox() {
    labelEl.classList.toggle("checked");
}
inputEl.onclick = function() {
    onCheckBox();
}