const express = require("express");
const cors = require("cors");

const router = require("./routes/formulario");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log("Aplicação rodando na porta 3333");
});

app.get("/", (request, response) => {
  response.send("Success");
});