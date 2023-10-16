// Wrap the JavaScript code in an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button and the paragraph
  const toggleButton = document.getElementById("toggle-button");
  const toggleParagraph = document.getElementById("toggle-paragraph");

  // Add a click event listener to the button
  toggleButton.addEventListener("click", function () {
    // Toggle the visibility of the paragraph
    if (
      toggleParagraph.style.display === "none" ||
      toggleParagraph.style.display === ""
    ) {
      toggleParagraph.style.display = "block"; // Show the paragraph
    } else {
      toggleParagraph.style.display = "none"; // Hide the paragraph
    }
  });
});
