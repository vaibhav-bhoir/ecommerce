//Get the button
mybutton = document.getElementById("myBtn");
//when user scroll down 20px  from the top of the document show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
//when user click on the button scroll to the top of document
function topfunction() {
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0; // for chrome,firefox, IE and opera
}

// product detail page js
var productImg = document.getElementById("productImg");
// var smallImg = document.getElementsByClassName("small-img");
var smallImg = document.querySelectorAll(".small-img");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", () => {
    productImg.src = smallImg[i].src;
  });
}

// smallImg[0].onclick = function () {
//   productImg.src = smallImg[0].src;
// };
// smallImg[1].onclick = function () {
//   productImg.src = smallImg[1].src;
// };
// smallImg[2].onclick = function () {
//   productImg.src = smallImg[2].src;
// };
// smallImg[3].onclick = function () {
//   productImg.src = smallImg[3].src;
// };

// Account page js

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}

function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}
