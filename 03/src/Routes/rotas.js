const { Router } = require("express");
const { pegarEndereco } = require("../Controllers/endereco");

const router = Router();
router.get("/enderecos/:cep", pegarEndereco);

module.exports = router;
