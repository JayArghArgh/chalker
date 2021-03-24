const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSchema = new Schema({
  tournament: {type: String},
  dateCreated: {type: Date},
  datePlayed: {type: Date},
  gameType: {type: String},
  prize: [{
    title: {type: String},
    desc: {type: String},
    value: {type: String}
  }],
  players: [{
    playerId: {type: String},
    playerPosition: {type: Number},
    playerSetWins: {type: Number}  // number of sets won per match
  }]
})

const Match = mongoose.model("Match", MatchSchema);

module.exports = Match;