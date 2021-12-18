// Open and close the Mobile Navigation
var openNav = document.getElementById("mobileBtn");
var closeNav = document.getElementById("closeNav");
var mainNav = document.getElementById("topNav");
var topLink = document.querySelectorAll(".top-link");

function toggleNav() {
  mainNav.classList.toggle("open");
  openNav.classList.toggle("open");
  closeNav.classList.toggle("open");  
}

openNav.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav);

for(var i = 0; i < topLink.length; i++) {
  topLink[i].addEventListener('click', toggleNav);
}