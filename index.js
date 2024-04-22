const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// Load Environment Variables
require('dotenv').config();
const port = process.env.PORT;
if (!port) {
  console.error(`Invalid port for server: ${port}`)
  process.exit(1);
}

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Health Check Endpoint
app.get('/health', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  };
  res.status(200).send(data);
});

// Challenge #1: Add GET Pokemons Endpoint
require('./challenges/01_addGetPokemons')(app);

// Challenge #2: Add GET Pokemon Details Endpoint
require('./challenges/02_addGetPokemonDetail')(app);

// Challenge #3: Refactor with router
const router = require('./challenges/03_routingExample');
app.use('/basePath', router);

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
