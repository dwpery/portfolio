// Variable Bank
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 552 || document.documentElement.scrollTop > 552) {
    $("#backToTop").css("right","2.5vh");
    $("nav").css("background-color","#FFF");
    $("#headerTitle").css("color","#000");
    $(".navLinks li a").css("color","#000");
    $(".line").css("background-color","#000");
  } else {
    $("#backToTop").css("right","-10vh");
    $("nav").css("background-color","#FE7268");
    $("#headerTitle").css("color","#FFF");
    $(".navLinks li a").css("color","#FFF");
    $(".line").css("background-color","#FFF");
  }
}

function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; //Chromium
}

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
})
