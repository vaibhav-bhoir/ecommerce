// ------ product detail page js------

var productImg = document.getElementById("productImg");
var smallImg = document.querySelectorAll(".small-img");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].addEventListener("click", () => {
    productImg.src = smallImg[i].src;
  });
}

// -------Account page js-------

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
