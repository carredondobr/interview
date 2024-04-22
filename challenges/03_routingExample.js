const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0');
    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error(error);
    console.error(error.response.body);
    res.status(500);
  }
});

router.get('/:pokemon', async (req, res) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemon}`);
    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.error(error);
    console.error(error.response.body);
    res.status(500);
  }
});

module.exports = router;