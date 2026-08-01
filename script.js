//Accessing Elements................................................

let blueBtnEle = document.querySelector(".blue-btn");
let greenBtnEle = document.querySelector(".green-btn");
let redBtnEle = document.querySelector(".red-btn");
let yellowBtnEle = document.querySelector(".yellow-btn");
let whiteBtnEle = document.querySelector(".white-btn");
let blackBtnEle = document.querySelector(".black-btn");
let brownBtnEle = document.querySelector(".brown-btn");
let orangeBtnEle = document.querySelector(".orange-btn");

let bodyEle = document.querySelector("body");

//Funtions..........................................................

function resetColor() {
  bodyEle.classList.remove(
    'green', 'red', 'yellow', 'white', 'black', 'brown', 'orange'
  );
}

function blueColor() {
  resetColor();
  bodyEle.classList.add("blue");
}
function greenColor() {
  resetColor();
  bodyEle.classList.add("green");
}
function redColor() {
  resetColor();
  bodyEle.classList.add("red");
}
function yellowColor() {
  resetColor();
  bodyEle.classList.add("yellow");
}
function whiteColor() {
  resetColor();
  bodyEle.classList.add("white");
}
function blackColor() {
  resetColor();
  bodyEle.classList.add("black");
}
function brownColor() {
  resetColor();
  bodyEle.classList.add("brown");
}
function orangeColor() {
  resetColor();
  bodyEle.classList.add("orange");
}

//Event Listeners....................................................

blueBtnEle.addEventListener("click", blueColor);
greenBtnEle.addEventListener("click", greenColor);
redBtnEle.addEventListener("click", redColor);
yellowBtnEle.addEventListener("click", yellowColor);
whiteBtnEle.addEventListener("click", whiteColor);
blackBtnEle.addEventListener("click", blackColor);
brownBtnEle.addEventListener("click", brownColor);
orangeBtnEle.addEventListener("click", orangeColor);
