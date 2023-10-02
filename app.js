const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("testing");
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT);
