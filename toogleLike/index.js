let puppyImageElement = document.getElementById("puppyImage");
let likeImageElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");
let isLiked = false;


function onClickLikeButton() {
    if (isLiked === false) {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeImageElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#ffffff";
        isLiked = true;
    } else {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeImageElement.style.color = "#cbd2d9";
        likeButtonElement.style.backgroundColor = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        isLiked = false;
    }
}