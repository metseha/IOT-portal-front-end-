
// this code enables the slider funcionality on the homepage
const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", pauseSlider);
slider.addEventListener("mouseleave", startSlider);

function pauseSlider() {
  clearInterval(slideInterval);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}

startSlider();

function nextSlide() {
  const slides = document.querySelector(".slides");
  slides.style.transition = "transform 0.32s ease-in-out";
  slides.style.transform = "translateX(-100%)";
  setTimeout(() => {
    slides.style.transition = "none";
    slides.style.transform = "translateX(0)";
    slides.appendChild(slides.firstElementChild);
  }, 1000);
}
