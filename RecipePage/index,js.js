let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};
let recipeTitleEl = document.getElementById("recipeTitle");
let imgEl = document.getElementById("img");
let ingredientsListContainerEl = document.getElementById("ingredientsListElement");
let imgContainerEl = document.getElementById("imgContainer");

recipeTitleEl.textContent = recipeObj.title;
imgEl.setAttribute("src", recipeObj.imgSrc);
imgEl.classList.add("w-100");
imgContainerEl.appendChild(imgEl);
for (let ingredient of ingredientList) {
    let ingredientEl = documnet.createElement("li");
    ingredientEl.classList.add("ingredient");
    ingredientListContainerEl.appendChild(ingredientEl);
}