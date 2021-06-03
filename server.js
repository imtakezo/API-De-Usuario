const express = require("express");
const app = express();
const port = 3000;

const userAdmin = {
  id: 1,
  name: "João",
  admin: true
};

app.get("/users", (req, res) => {
  res.send(userAdmin);
});

app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});