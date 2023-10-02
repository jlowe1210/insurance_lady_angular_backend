const express = require("express");
const MessageRoutes = require("./routes/Message.routes");
const ConsultationRoutes = require("./routes/Consulation.routes");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/message", MessageRoutes);
app.use("/api/consulation", ConsultationRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ name: "justin" });
});

app.listen(3000 || process.env.PORT);
