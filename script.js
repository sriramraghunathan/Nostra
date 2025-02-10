// popup wrong
let close = document.getElementById("close");
let pop = document.querySelector(".pop");
close.addEventListener("click", function () {
  close.style.display = "none";
});
pop.addEventListener("click", function () {
  pop.style.display = "none";
});
// scroll smooth arrival and most wanted
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// image section slide
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slider-container img");
  const totalSlides = slides.length;
  const imagesPerView = 1; 
  let currentIndex = 0;

  // Function to move to the next set of images
  const nextSlide = () => {
    currentIndex = (currentIndex + imagesPerView) % totalSlides;
    updateSlider();
  };

  // Function to move to the previous set of images
  const prevSlide = () => {
    currentIndex = (currentIndex - imagesPerView + totalSlides) % totalSlides;
    updateSlider();
  };

  // Function to update the slider position
  const updateSlider = () => {
    const offset = -currentIndex * (33.5 / imagesPerView); 
    sliderContainer.style.transform = `translateX(${offset}%)`;
  };

  // Add event listeners to the arrow buttons
  document.querySelector("#slider-left").addEventListener("click", prevSlide);
  document.querySelector("#slider-right").addEventListener("click", nextSlide);

  setInterval(nextSlide, 2000); 
});

// most-wanted
document
  .querySelector(".most-wanted-image-main")
  .addEventListener("wheel", function (event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY; 
  });
