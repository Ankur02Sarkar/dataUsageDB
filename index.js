const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3001;
const apiData = require("./data.json");
app.get("/", (req, res) => {
  res.send("Live");
});
app.get("/api", (req, res) => {
  res.send(apiData);
});
app.listen(port, () => {
  console.log("Live on console");
});
