<script>
function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}
</script>

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

<script>
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  // Apply to ALL images you want clickable
  document.querySelectorAll(".clickable-img").forEach(img => {
    img.addEventListener("click", function () {
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
    });
  });

  // Close button
  closeBtn.onclick = function () {
    lightbox.style.display = "none";
  };

  // Close when clicking outside image
  lightbox.onclick = function (e) {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  };
</script>

