const toggleBtn = document.querySelectorAll(".toggle_menu");
const dropMenu = document.querySelector(".dropMenu");
const body = document.querySelector("body");
toggleBtn.forEach((item, index, arr) => {
  item.onclick = () => {
    dropMenu.classList.toggle("open");
  };
});

// Image section click and  slider  effect

const toggle_Btn = document.querySelector(".toggle_Btn");
const owlCarousel = document.getElementById("owl-carousel");
let currentIndex = 0;

const images = [
  "/Assets/images/pub-and-bar-template-event-img-1.jpg",
  "/Assets/images/drink-event-2.jpg",
  "/Assets/images/drink-event-1.jpg",
  "/Assets/images/food-event-1.jpg",
  "/Assets/images/food-event-2.jpg",
  "/Assets/images/pub-and-bar-template-event-img-2.jpg",
  "/Assets/images/gallery-2.jpg",
  "/Assets/images/drink-event-2.jpg",
];

function showSlider(imagePath) {
  const sliderImage = document.getElementById("slider-image");
  sliderImage.src = imagePath;
  owlCarousel.classList.toggle("open");
  body.classList.toggle("changeBg");
  currentIndex = images.indexOf(imagePath);
}

function navigateImage(step) {
  currentIndex += step;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  const sliderImage = document.getElementById("slider-image");
  sliderImage.src = images[currentIndex];
}

toggle_Btn.onclick = () => {
  owlCarousel.classList.toggle("open");
  body.classList.toggle("changeBg");
};
