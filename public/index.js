// console.log("index.js");
init ();

async function init() {
  const allMatches = await API.getAllMatch();
  console.dir(allMatches);
}