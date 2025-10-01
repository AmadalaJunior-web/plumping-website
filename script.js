// Array of image paths
const images = [
  "pexels-bobbydimas-27051929.jpg",
  "pexels-godisable-jacob-226636-905243.jpg",
  "pexels-megan-ruth-192440753-12610414.jpg",
  "pexels-vladimirsrajber-25649156.jpg",
  "pexels-brett-sayles-12778827.jpg",
  "pexels-cottonbro-5532838.jpg",
  "pexels-kindelmedia-8488035.jpg",
  "pexels-kutlay-uyar-153699421-10597296.jpg",
  "pexels-pavel-danilyuk-7937292.jpg",
  "pexels-thefstopper-1466667.jpg"
];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");

// Function to change background
function changeBackground() {
  heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Start slideshow
changeBackground(); // set first image
setInterval(changeBackground, 5000); // change every 5 seconds
