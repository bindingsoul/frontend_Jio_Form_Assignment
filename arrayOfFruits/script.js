// Wrap the JavaScript code in an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Define an array of favorite fruits
  const favoriteFruits = ["Banana", "Apple", "Orange", "Guava", "Mango"];

  // Function to display the fruits as an ordered list
  function displayFruits() {
    favoriteFruits.push(document.getElementById("input-fav-fruit").value);
    // Get the <ul> element where we'll display the fruits
    const fruitList = document.getElementById("fruit-list");

    // Clear any existing list items
    fruitList.innerHTML = "";

    // Loop through the favoriteFruits array and create <li> elements
    favoriteFruits.forEach((fruit) => {
      const listItem = document.createElement("li");
      listItem.textContent = fruit;
      fruitList.appendChild(listItem);
    });
  }

  // Get the button element
  const displayButton = document.getElementById("display-button");

  // Add a click event listener to the button
  displayButton.addEventListener("click", displayFruits);

//   console.log("JavaScript loaded");

});
