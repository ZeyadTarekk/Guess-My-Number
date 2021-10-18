"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉Correct Number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 7;
// document.querySelector(".guess").value = 7;
let randomNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Enter A Value";
    guess = Number(document.querySelector(".guess").value);
  } else {
    if (guess === randomNumber) {
      document.querySelector(".message").textContent = "🎉Correct Number";
      document.querySelector(".number").textContent = randomNumber;
    } else if (guess < randomNumber) {
      document.querySelector(".message").textContent = "Too Low!!";
      guess = Number(document.querySelector(".guess").value);
    } else {
      document.querySelector(".message").textContent = "Too High!!";
      guess = Number(document.querySelector(".guess").value);
    }
  }
});
