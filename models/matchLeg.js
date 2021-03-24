const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchLegSchema = new Schema({
  match: {type: String},
  matchSet: {type: String},
  dateCreated: {type: Date},
  datePlayed: {type: Date},
  players: [{
    playerId: {type: String},
    playerOrder: {type: Number},
    playerPosition: {type: Number},
  }],
  turns: [{
    turnNumber: {type: Number},
    turnTarget: {type: String},
  }]
})

const matchLeg = mongoose.model("MatchLeg", MatchLegSchema);

module.exports = matchLeg;