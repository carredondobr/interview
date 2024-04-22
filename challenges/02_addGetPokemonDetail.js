/**
 * Return the detail of a pokemon
 * API Documentation: https://pokeapi.co/api/v2/
 */
module.exports = function addGetPokemons(app) {
  app.get('/pokemon/:pokemon', async (req, res) => {
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
};
