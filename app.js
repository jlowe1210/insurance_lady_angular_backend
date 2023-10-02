const express = require("express");
const app = express();
const path = require("path");
const MessageRoutes = require("./routes/Message.routes");
const ConsultationRoutes = require("./routes/Consulation.routes");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/message", MessageRoutes);
app.use("/api/consulation", ConsultationRoutes);

app.get("/", (req, res) => {
  res.status(200).send("testing");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT);
