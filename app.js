const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("testing");
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT);
