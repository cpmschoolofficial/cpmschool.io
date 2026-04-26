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
.overlay {
  display: none;
}

.overlay.active {
  display: block;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.6);
  z-index:1500;
}
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
}
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
}

/* SLIDER */
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){
  slides.forEach(s => s.classList.remove("active"));
  index++;
  if(index >= slides.length) index = 0;
  slides[index].classList.add("active");
}

setInterval(showSlide, 4000);

function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
