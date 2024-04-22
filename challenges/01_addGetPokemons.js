const fetch = require('node-fetch');

/**
 * Return the list of pokemons
 * API Documentation: https://pokeapi.co/api/v2/
 */
module.exports = function addGetPokemons(app) {
  app.get('/pokemon', async (req, res) => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0');
      const json = await response.json();
      res.json(json);
    } catch (error) {
      console.error(error);
      console.error(error.response.body);
      res.status(500);
    }
  });
};
