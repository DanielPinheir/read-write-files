const express = require("express");
const routes = require("./Routes/rotas");

const app = express();

app.use(express.json());
app.use(routes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server booted on port ${port}`);
});
