const { Router } = require("express");
const { listarProdutos, vendaProdutos } = require("../Controllers/vendas");

const router = Router();

router.get("/produtos", listarProdutos);
router.post("/produtos", vendaProdutos);

module.exports = router;
