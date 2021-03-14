"use strict";

fetch("/api/tournament", { method: "GET" })
  // .then(response => response.json())
  .then(response => { console.dir(response);});
  // .then(response => {
  //   const myData = response.results;
  //   console.dir(myData);
  // });
