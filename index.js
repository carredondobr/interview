const express = require("express");
const env = process.env.NODE_ENV || 'development';
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.environments', `${env}.env`),
});
const bodyParser = require('body-parser');
const mongo = require('./services/mongo');
const pokemonModel = require('./models/pokemons').Model;
const fetch = require('node-fetch');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = process.env.PORT;

app.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await fetch('httxps://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
    const json = await pokemons.json();
    res.json(json);
  } catch (error) {
    console.log(error.response.body);
  }
});

app.put('/pokemons', async(req, res) => {
  console.log('body is ',req.body);
  const pokemon = pokemonModel.CreatePokemon(req.body);
  res.json(pokemon);
});

app.listen(port, async() => {
  await mongo.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});