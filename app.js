var typed = new Typed(".typing-1",{
  strings: ["Consistent Learner","working as a GET in JSW Steel Raigarh"],
  typeSpeed: 60,
  backSpeed:30,
  loop:true
});
var typed = new Typed(".typing-2",{
  strings: ["working as a GET in JSW Steel Raigarh"],
  typeSpeed: 80,
  backSpeed:50,
  loop:true
});

const navslide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
  if (link.style.animation) {
      link.style.animation = '';
  } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s` ;
  }
});
burger.classList.toggle('toggle');
});
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  document.getElementById("navbar").style.top = "0";
} else {
  document.getElementById("navbar").style.top = "-61px";
}
}
navslide();