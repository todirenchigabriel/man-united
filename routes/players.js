const express = require('express');
const router = express.Router();

// Player Model
const Player = require('../models/Player');

// Get all players
router.get('/', (req, res) => {
  Player.find().then((players) => res.json(players));
});

// Get a specific player by slug
router.get('/:slug', (req, res) => {
  Player.find({ slug: req.params.slug }, (err, foundPlayer) => {
    if (err) {
      console.log('Something is wrong');
      res.redirect('back');
    } else {
      res.json(foundPlayer);
    }
  });
});

router.post('/', (req, res) => {
  const newPlayer = new Player({
    name: req.body.name
  });

  newPlayer.save().then((player) => res.json(player));
});

module.exports = router;
