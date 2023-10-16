let number = 0;
number = document.getElementById("num").value;

function evenOdd(number) {
  number = document.getElementById("num").value;
  if (number == null) {
    console.log("Read null");
  } else if (number % 2 == 0) {
    console.log("Number is even.");
    document.getElementById("h1_id").textContent = "Number is even.";
  } else if (number % 2 != 0) {
    console.log("Number is odd.");
    document.getElementById("h1_id").textContent = "Number is odd.";
  }
}

// Function to enable/disable the button based on input
document
  .getElementById("even-or-odd-btn")
  .addEventListener("input", function () {
    const value1 = document.getElementById("even-or-odd-btn");
    value1.disabled = this.value === "";
  });
