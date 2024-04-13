let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainerEl = document.getElementById("profileContainer");

let imgContainerEl = document.getElementById("imgContainer");
imgContainerEl.classList.toggle("img-container");

let imgEl = document.createElement("img");
imgEl.src = profileDetails.imgSrc;
imgEl.classList.toggle("img");
imgContainerEl.appendChild(imgEl);

let headingEl = document.createElement("h1");
headingEl.textContent = profileDetails.name;
headingEl.ClassList.toggle("heading");
imgContainerEl.appendChild(headingEl);

let paragraphEL = document.createElement("p");
paragraphEl.textContent = "Age : " + profileDetails.age;
paragraphEl.ClassList.toggle("paragraph");
imgContainerEl.appendChild(paragraphEl);