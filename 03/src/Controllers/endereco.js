const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises");

const pegarEndereco = async (req, res) => {
  const { cep } = req.params;

  try {
    const enderecos = JSON.parse(await fs.readFile("./src/enderecos.json"));

    const enderecoSelecionado = enderecos.filter((endereco) => {
      return endereco.cep.trim().split("-").join("") === cep;
    });

    if (enderecoSelecionado.length === 0) {
      const buscaEndereco = await buscarEndereco(cep);
      enderecos.push(buscaEndereco);
      await fs.writeFile("./src/enderecos.json", JSON.stringify(enderecos));
      return res.status(201).json("Endereço cadastrado com sucesso!");
    }
    return res.status(404).json("Endereço já está cadastrado!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  pegarEndereco,
};
