const { listarPokemons, detalharPokemon } = require("utils-playground");

const listaPokemons = async (req, res) => {
  const { results } = await listarPokemons();
  return res.status(200).json(results);
};

const caracteristicasPokemon = async (req, res) => {
  const { idPokemon } = req.params;

  try {
    const {
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    } = await detalharPokemon(Number(idPokemon));

    return res.status(200).json({
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listaPokemons,
  caracteristicasPokemon,
};
