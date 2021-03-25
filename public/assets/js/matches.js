"use strict";
console.log("index.js");

const MATCHES = $(".matches");

async function init() {
  const ALL_MATCHES = await API.getAllMatch();
  return ALL_MATCHES;
}

init().then(myMatches => {
  const MATCHES_UL = $("<ul>");
  myMatches.forEach(val => MATCHES_UL.append(`<li>${val.gameType}</li>`));


  MATCHES.append(MATCHES_UL);
})
