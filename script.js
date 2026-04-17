function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

// ANIMATION
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

function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}
