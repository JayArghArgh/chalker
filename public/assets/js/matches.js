"use strict";
// console.log("index.js");

const MATCHES = $(".matches");
const MATCH_ID = location.pathname.split("/match/")[1];
if (MATCH_ID === undefined) {
  // workout = await API.createWorkout()
  allMatches();
} else {
  oneMatch();
}


async function allMatches() {
  const ALL_MATCHES = await API.getAllMatch()
    .then(myMatches => {
      const MATCHES_UL = $("<ul>");

      myMatches.forEach(val => {
        let matchLink = `<a href="/match/${val._id}" title="${val._id}">${val.gameType}</a>`;
        MATCHES_UL.append(`<li>${matchLink}</li>`)
      });

      MATCHES.append(MATCHES_UL);
    })
}

async function oneMatch() {
  const ALL_MATCHES = await API.getOneMatch(MATCH_ID)
    .then(myMatches => {
      const MY_MATCH = myMatches[0];
      const PLAYERS_UL = $("<ul>");

      // console.log("single match:", MY_MATCH);

      MY_MATCH.players.forEach(player => {
        let myPlayer = player.playerId;
        console.log(myPlayer);
        PLAYERS_UL.append(`<li>${myPlayer}</li>`);
        // console.log(player);
      })

      MATCHES.append(`<h3>${MY_MATCH._id} - ${MY_MATCH.gameType}</h3>`);
      MATCHES.append(PLAYERS_UL);
    })
}