let maxLife = 3;
let randomNumber = 0;
randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
document.getElementById("life").innerHTML = "❤️❤️❤️";
document
  .getElementById("submit-guessNum")
  .addEventListener("click", function () {
    //   value1.disabled = this.value === "";
    console.log("Button is clicked");
    console.log("maxLife is " + maxLife);

    if (maxLife < 0) {
      document.getElementById("game-status").innerHTML =
        "Game over, click to restart game";
    } else if (maxLife === 0) {
      document.getElementById("game-status").innerHTML =
        "You lost!" +
        " The number was " +
        randomNumber +
        " ,click to restart game.";
      document.getElementById("life").innerHTML = "💔💔💔";
    } else {
      let value1 = document.getElementById("input-randNum").value;
      if (value1 === "") {
        main();
        console.log(value1);
        console.log("value1 wala func");
      } else if (value1 < randomNumber)
        document.getElementById("game-status").innerHTML = "Guess higher";
      else if (value1 > randomNumber)
        document.getElementById("game-status").innerHTML = "Guess lower";
      else {
        document.getElementById("game-status").innerHTML =
          "You win Correct Guess, restart game?";
        maxLife = -1;
      }
    }
    maxLife = maxLife - 1;
    if (maxLife === 1) document.getElementById("life").innerHTML = "❤️💔💔";
    else if (maxLife === 2)
      document.getElementById("life").innerHTML = "❤️❤️💔";
    else if (maxLife === 3)
      document.getElementById("life").innerHTML = "❤️❤️❤️";
    else {
      document.getElementById("life").innerHTML = "💔💔💔";
      document.getElementById("game-status").innerHTML =
        "You lost!" +
        " The number was " +
        randomNumber +
        " ,Click to restart game.";
    }
  });

function main() {
  document.getElementById("game-status").innerHTML = "Enter the number, please";
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  maxLife = 3;
  document.getElementById("life").innerHTML = "❤️❤️❤️";
}
document.getElementById("restart-game").addEventListener("click", main);
