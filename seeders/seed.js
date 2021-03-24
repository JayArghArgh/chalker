const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chalker", {
  useNewUrlParser: true
});

const matchSeed = [
  {
    dateCreated: Date.now,
    gameType: "Burma - HardMan",
  },
  {
    dateCreated: Date.now,
    gameType: "Burma - HardMan",
  },

];

db.Match.deleteMany({})
  .then(() => db.Match.collection.insertMany(matchSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
