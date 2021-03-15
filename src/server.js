const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const petRouter = require("./routes/pet");

const app = express();
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = process.env.PORT || 5000;
app.use("/pet", petRouter);

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
