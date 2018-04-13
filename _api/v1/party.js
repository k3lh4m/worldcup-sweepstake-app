const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const startUpDebugger = require('debug')('app:startup');

const dbConnect = mongoose.connect('mongodb://localhost/worldcup-sweepstaker');
dbConnect.then(() => {
  startUpDebugger('Connected to worldcup staker...')
});

const partySchema = new mongoose.Schema({
  partyId: {
    type: Number,
    required: true
  },
  dateCreated: Date,
  totalParticipants: Number,
  finishedAddingName: {
    type: Boolean,
    default: false
  },
  participants: [{
    id: Number,
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
  return Math.floor(Math.random() * 90000) + 10000;
}

function createNewParty(partyId) {
  const party = new Party({
    partyId: partyId,
    dateCreated: new Date(),
    totalParticipants: 0,
    finishedAddingName: false
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

  result
    .then((party) => {
      if (!party) {
        res.send(404, {error: 'No party with this ID has been found'})
      }

      res.send(party);
    })
});

//When the party has enough name you can set the complete party to true
router.put('/party/:id', (req, res) => {
  const params = {
    id: req.params.id,
    isCompleted: req.query.completedParty
  };

  const result = Party.update(
    {partyId: params.id},
    {
      $set: {
        finishedAddingName: params.isCompleted
      }
    }
  );

  result.then((data) => {
    res.send(data)
  })
});

// Add Participant to party
router.put('/party/:id/participants', (req, res) => {
  const _id = req.params.id;

  const result = Party.update(
    {partyId: _id},
    {
      $push:
        {
          participants: req.body
        },
    });

  result.then((data) => {
    res.send(data)
  })
});

//Remove participant from party
router.delete('/party/:id/participants/:participantId', (req, res) => {
  const params = {
    id: req.params.id,
    participantId: req.params.participantId
  };

  const result = Party.update(
    {partyId: params.id},
    {
      $pull:
        {
          participants: {
            _id: params.participantId
          }
        },
    })
  ;

  result.then((data) => {
    res.send(data)
  })
})
;


module.exports = router;
