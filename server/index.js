const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;
app.use(express.json());

const contracts = [];
app.use(cors());
app.use(express.json());

app.post("/deployContract", (req, res) => {
  const { escrow } = req.body;
  contracts.push(escrow);
  res.status(200).send(contracts);
});

app.get("/getContracts", (req, res) => {
  res.status(200).send(contracts);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
