const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const startUpDebugger = require('debug')('app:startup');

const dbConnect = mongoose.connect('mongodb://localhost/worldcup-sweepstaker');
dbConnect.then(() => { startUpDebugger('Connected to worldcup staker...') });

const partySchema = new mongoose.Schema({
  partyId: {
    type: Number,
    required: true
  },
  dateCreated: Date,
  totalParticipants: Number,
  participants: [{
    name: String,
    numberOfTeams: Number,
    teamsAllocated: [{
      country: String,
      countryFlag: String
    }]
  }]
});

const Party = mongoose.model('Party', partySchema);

function generatePartyCode() {
  return Math.floor(Math.random()*90000) + 10000;
}

function createNewParty(partyId) {
  const party = new Party({
    partyId: partyId,
    dateCreated: new Date(),
    totalParticipants: 0,
  });

  const result = party.save();
  result.then((data) => {
    console.log(data);
  });
}

router.get('/createparty', (req, res) => {
  const partyId = generatePartyCode();
  createNewParty(partyId);

  res.send({
    partyId: partyId
  })
});

router.get('/party', (req, res) => {
  const _id = req.query.partyId;

  const result = Party.findOne({
    partyId: _id
  });

  result.then((data) => {
    res.send(data);
  })
});

module.exports = router;
