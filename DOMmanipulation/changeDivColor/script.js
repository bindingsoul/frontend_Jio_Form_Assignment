// Wrap the JavaScript code in an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("JS loaded!");
  const colorSelect = document.getElementById("colors-select");
  const changingColorDiv = document.getElementById("changing-color");

  // Add an event listener to the dropdown
  colorSelect.addEventListener("change", function () {
    const selectedColor = colorSelect.value;
    changingColorDiv.style.backgroundColor = selectedColor;
  });

});
