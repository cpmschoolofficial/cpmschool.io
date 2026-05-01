 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/js/script.js b/js/script.js
index 7be56f9299aa877fa236a0b31405f559d7fa36b4..fb365757ff9f00b68c9c590c87be09e7eb0b35df 100644
--- a/js/script.js
+++ b/js/script.js
@@ -1,106 +1,38 @@
 function toggleMenu() {
   document.getElementById("navMenu").classList.toggle("active");
   document.querySelector(".menu-overlay").classList.toggle("active");
 }
 
 /* SLIDER */
-let slides = document.querySelectorAll(".slide");
+const slides = document.querySelectorAll(".slide");
 let index = 0;
 
-function showSlide(i){
-  slides.forEach(s => s.classList.remove("active"));
+function showSlide(i) {
+  slides.forEach((slide) => slide.classList.remove("active"));
   slides[i].classList.add("active");
 }
 
-function nextSlide(){
+function nextSlide() {
   index = (index + 1) % slides.length;
   showSlide(index);
 }
 
-setInterval(nextSlide, 4000);
+if (slides.length > 0) {
+  setInterval(nextSlide, 4000);
+}
 
-// SCROLL ANIMATION
-const elements = document.querySelectorAll('.animate');
+/* SCROLL ANIMATION */
+const elements = document.querySelectorAll(".animate");
 
-function showOnScroll(){
+function showOnScroll() {
   const trigger = window.innerHeight * 0.85;
 
-  elements.forEach(el=>{
-    if(el.getBoundingClientRect().top < trigger){
-      el.classList.add('show');
+  elements.forEach((el) => {
+    if (el.getBoundingClientRect().top < trigger) {
+      el.classList.add("show");
     }
   });
 }
 
-window.addEventListener('load', showOnScroll);
-window.addEventListener('scroll', showOnScroll);
-.overlay {
-  display: none;
-}
-
-.overlay.active {
-  display: block;
-  position: fixed;
-  top:0;
-  left:0;
-  width:100%;
-  height:100%;
-  background: rgba(0,0,0,0.6);
-  z-index:1500;
-}
-function toggleMenu(){
-  document.getElementById("navMenu").classList.toggle("active");
-}
-function toggleMenu(){
-  document.getElementById("navMenu").classList.toggle("active");
-}
-
-/* SLIDER */
-let slides = document.querySelectorAll(".slide");
-let index = 0;
-
-function showSlide(){
-  slides.forEach(s => s.classList.remove("active"));
-  index++;
-  if(index >= slides.length) index = 0;
-  slides[index].classList.add("active");
-}
-
-setInterval(showSlide, 4000);
-
-function toggleMenu(){
-  document.getElementById("menu").classList.toggle("active");
-  document.querySelector(".menu-overlay").classList.toggle("active");
-}
-function toggleMenu(){
-  document.getElementById("navMenu").classList.toggle("active");
-}
-function toggleMenu(){
-  document.getElementById("navMenu").classList.toggle("active");
-  document.querySelector(".menu-overlay").classList.toggle("active");
-}
-function toggleMenu(){
-  document.getElementById("navMenu").classList.toggle("active");
-  document.querySelector(".menu-overlay").classList.toggle("active");
-}
-<script>
-function toggleMenu(){
-  document.getElementById("navMenu").classList.toggle("active");
-  document.querySelector(".menu-overlay").classList.toggle("active");
-}
-</script>
-let slides = document.querySelectorAll(".slide");
-let index = 0;
-
-function showSlide(i){
-  slides.forEach(slide => slide.classList.remove("active"));
-  slides[i].classList.add("active");
-}
-
-function autoSlide(){
-  index++;
-  if(index >= slides.length){ index = 0; }
-  showSlide(index);
-}
-
-setInterval(autoSlide, 4000);
+window.addEventListener("load", showOnScroll);
+window.addEventListener("scroll", showOnScroll);
 
EOF
)
