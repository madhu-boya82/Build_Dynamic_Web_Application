/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];
let todoItemsContainer = document.getElementById("todoItemsContainer");

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.getElementById("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelElement = document.getElementById("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("check-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}