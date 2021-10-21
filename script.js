"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉Correct Number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 7;
// document.querySelector(".guess").value = 7;

const randomNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = randomNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!!";
  } else {
    if (guess === randomNumber) {
      document.querySelector(".message").textContent = "🎉Correct Number";
      document.querySelector(".highscore").textContent =
        document.querySelector(".score").textContent;
    } else if (guess < randomNumber) {
      if (document.querySelector(".score").textContent > 1) {
        document.querySelector(".message").textContent = "Too Low!!";
      } else {
        document.querySelector(".message").textContent =
          "You Lost the game!💥💥";
      }
      document.querySelector(".score").textContent--;
    } else {
      if (document.querySelector(".score").textContent > 1) {
        document.querySelector(".message").textContent = "Too High!!";
      } else {
        document.querySelector(".message").textContent =
          "You Lost the game!😓😥";
      }
      document.querySelector(".score").textContent--;
    }
  }
});
