const fetch = require('node-fetch');

/**
 * Return a list of pokemons
 * API Documentation: https://pokeapi.co/
 */
module.exports = function addGetPokemons(app) {
  app.get('/pokemon', async (req, res) => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0');
      const parsedResponse = await response.json();
      res.json(parsedResponse);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  });
};
