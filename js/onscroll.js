// -----scroll btn js---------

mybutton = document.getElementById("myBtn");
//when user scroll down specified px from the top of the document show the button
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
