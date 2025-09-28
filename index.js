/* let slideIndex = 0;

function changeSlide(direction) {
  const slideshow = document.querySelector(".video-slideshow");
  const totalSlides = document.querySelectorAll(".welcomeVideo").length;

  // Move only if within range
  if (
    (direction === -1 && slideIndex > 0) ||
    (direction === 1 && slideIndex < totalSlides - 1)
  ) {
    slideIndex += direction;
    slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
} */

let slideIndex = 1; // start from first "real" slide
let slideshow = document.querySelector(".video-slideshow");
let slides = document.querySelectorAll(".welcomeVideo");

// Clone first and last slide for infinite effect
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slideshow.appendChild(firstClone);
slideshow.insertBefore(lastClone, slides[0]);

// Update slides NodeList
slides = document.querySelectorAll(".welcomeVideo");

// Set initial position
slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;

function changeSlide(direction) {
  const totalSlides = slides.length;
  slideIndex += direction;

  slideshow.style.transition = "transform 0.5s ease";
  slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;

  // Reset position when reaching clones
  slideshow.addEventListener("transitionend", () => {
    if (slides[slideIndex].isSameNode(firstClone)) {
      slideshow.style.transition = "none";
      slideIndex = 1; // jump back to first real slide
      slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
    if (slides[slideIndex].isSameNode(lastClone)) {
      slideshow.style.transition = "none";
      slideIndex = slides.length - 2; // jump to last real slide
      slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
  });
}

function toggleQuotation() {
  const table = document.getElementById("quotation");
  const button = document.getElementById("seeMore-btn");

  //toggle the table visibility
  table.classList.toggle("show");

  //update the button text
  button.textContent = table.classList.contains("show")
    ? "See Less"
    : "See More";
}

//attach the function to the button
document
  .getElementById("seeMore-btn")
  .addEventListener("click", toggleQuotation);

// Grab the toggle button and nav menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Toggle the 'active' class on click
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
