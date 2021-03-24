const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chalker", {
  useNewUrlParser: true
});


const matchSeed = [
  {
    tournament: null,
    dateCreated: Date.now,
    datePlayed: null,
    gameType: "Burma - HardMan",
    prize: [
      {
        title: "Voucher",
        desc: "Darts Voucher",
        value: 100
      },
      {
        title: "Voucher",
        desc: "Darts Voucher",
        value: 50
      },
    ],
    players: [
      {
        playerId: 123123,
        playerPosition: 1,
        playerSetWins: null
      },
      {
        playerId: 123456,
        playerPosition: 2,
        playerSetWins: null
      },
      {
        playerId: 4563677,
        playerPosition: 3,
        playerSetWins: null
      },
    ],
  },

  {
    tournament: null,
    dateCreated: Date.now,
    datePlayed: null,
    gameType: "Burma - HardMan",
    prize: [
      {
        title: "Voucher",
        desc: "Darts Voucher",
        value: 80
      },
      {
        title: "Voucher",
        desc: "Darts Voucher",
        value: 40
      },
    ],
    players: [
      {
        playerId: 123123,
        playerPosition: 1,
        playerSetWins: null
      },
      {
        playerId: 123456,
        playerPosition: 2,
        playerSetWins: null
      },
    ],
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
