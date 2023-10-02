const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("testing");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT);
