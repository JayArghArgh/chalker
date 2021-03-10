"use strict";
console.log("loaded burma.js");

// Add a listener for the score cell.

const btnPlayerScore = document.querySelectorAll(".player-score");
const divPlayerScore = $("#div-player-score");

btnPlayerScore.forEach(button => {
  button.addEventListener("click", e => {
    e.stopPropagation();
    const id = e.target.getAttribute("data-userid");
    console.log(`clickety-clackety-this-is-whackety ${id}`);
    divPlayerScore.html(id);
  });
});
