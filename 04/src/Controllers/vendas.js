const produtos = require("../Data/bancoDeDados");
const fs = require("fs/promises");

//GET
const listarProdutos = async (req, res) => {
  return res.status(200).json(produtos);
};

//POST
const vendaProdutos = async (req, res) => {
  const { produto_id, quantidade } = req.body;

  const produtoVendido = produtos.find(
    (produto) => produto.id == Number(produto_id)
  );

  if (!produtoVendido) {
    return res.status(404).json("Produto não encontrado.");
  }

  try {
    const totalVendas = JSON.parse(await fs.readFile("../vendas.json"));

    totalVendas.vendas.push({
      produto: produtoVendido,
      quantidade,
    });

    await fs.writeFile("./src/vendas.json", JSON.stringify(totalVendas));

    return res.status(201).json("Venda cadastrada com sucesso.");
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    console.log("END");
  }
};

module.exports = { listarProdutos, vendaProdutos };
