//When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // var a = document.getElementsById("a");
  var navbar = document.getElementById("navbar");
  var logo = document.getElementById("logo");
  var logoImage = document.querySelector(".logo-image");
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.style.padding = "5px 10px";
    // a.style.color= 'red';
    navbar.style.backgroundColor='black';
    navbar.style.opacity=0.75;
    navbar.style.color='red';
    logo.style.fontSize = "25px";
    logoImage.style.height = "50px";
  } else {
    navbar.style.padding = "8px 5px";
    logo.style.fontSize = "35px";
    logoImage.style.height = "15vh";
    navbar.style.backgroundColor='transparent';
    navbar.style.color='black';
  }
}


