const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchSetSchema = new Schema({
  match: {type: String},
  dateCreated: {type: Date},
  datePlayed: {type: Date},
  players: [{
    playerId: {type: String},
    playerPosition: {type: Number},
    playerLegWins: {type: Number}  // number of legs won per set
  }]
})

const MatchSet = mongoose.model("MatchSet", MatchSetSchema);

module.exports = MatchSet;