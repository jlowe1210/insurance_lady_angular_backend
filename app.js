const express = require("express");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "dist")));
app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT);
