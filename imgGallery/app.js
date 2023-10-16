document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpg",
    "img8.jpeg",
    "img9.jpeg",
  ];
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const galleryImage = document.getElementById("gallery-image");

  let currentIndex = 0;

  // Function to update the displayed image
  function displayImage() {
    galleryImage.src = images[currentIndex];
  }

  // Event listener for the "Previous" button
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage();
  });

  // Event listener for the "Next" button
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage();
  });

  // Initial image display
  displayImage();
});
