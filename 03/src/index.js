const express = require("express");
const app = express();
const router = require("./Routes/rotas");

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Servidor inicializado na porta 3000.");
});
