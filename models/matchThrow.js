const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchThrowSchema = new Schema({
  match: {type: String},
  matchSet: {type: String},
  matchLeg: {type: String},
  matchTurn: {type: String},
  dateCreated: {type: Date},
  datePlayed: {type: Date},
  player: {type: String},
  playerOrder: {type: Number},
  darts: [{
    target: {type: String},
    score: {type: Number},
  }]
})

const matchThrow = mongoose.model("MatchThrow", MatchThrowSchema);

module.exports = matchThrow;