// MOBILE MENU
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

// SLIDER AUTO
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  index++;
  if (index >= slides.length) index = 0;
  slides[index].classList.add("active");
}

setInterval(showSlide, 4000);

// SCROLL ANIMATION
const elements = document.querySelectorAll('.animate');

function showOnScroll(){
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el=>{
    if(el.getBoundingClientRect().top < trigger){
      el.classList.add('show');
    }
  });
}

window.addEventListener('load', showOnScroll);
window.addEventListener('scroll', showOnScroll);
